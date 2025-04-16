import { products } from '../../../curated-longevity-hub-08/src/data/products';
import { Product } from '../../../curated-longevity-hub-08/src/components/products/ProductCard';
import { NutritionClaim } from './nutrition-claims';

export interface PackageItem {
  product: Product;
  quantity: number;
}

export type PackageVariation = 'balanced' | 'protein' | 'vegan' | 'lowCarb';

// Helper function to score products based on nutrition claims
const scoreProduct = (product: Product): number => {
  let score = 0;
  const claims = product.nutrition_claims || [];
  
  // Score based on nutrition claims
  if (claims.includes('High Protein')) score += 5;
  if (claims.includes('High Fiber')) score += 4;
  if (claims.includes('Low Sugar') || claims.includes('Zero Sugar')) score += 3;
  if (claims.includes('Low Carb')) score += 2;
  if (claims.includes('Vegan Friendly')) score += 1;
  if (claims.includes('Heart Healthy')) score += 2;
  if (claims.includes('Omega-3 Rich')) score += 3;
  
  // Calculate protein-to-price ratio (higher is better)
  if (claims.includes('High Protein')) {
    const proteinPriceRatio = 1 / product.price;
    score += proteinPriceRatio * 10; // Weight the ratio in the scoring
  }
  
  return score;
}

// Enhanced function to get packages by price with different variations
export const getPackagesByPriceAndVariation = (
  pricePoint: number, 
  variation: PackageVariation = 'balanced'
): PackageItem[] => {
  // Score products based on the selected variation
  const scoredProducts = [...products].map(product => {
    const claims = product.nutrition_claims || [];
    let score = scoreProduct(product);
    
    // Adjust scores based on the variation
    switch (variation) {
      case 'protein':
        // Higher score for high protein products
        if (claims.includes('High Protein')) score += 10;
        if (claims.includes('Low Carb')) score += 5;
        break;
        
      case 'vegan':
        // Higher score for vegan/plant-based products
        if (claims.includes('Vegan Friendly')) score += 15;
        // Penalize non-vegan products
        if (!claims.includes('Vegan Friendly')) score -= 10;
        break;
        
      case 'lowCarb':
        // Higher score for low carb products
        if (claims.includes('Low Carb')) score += 10;
        if (claims.includes('Low Sugar') || claims.includes('Zero Sugar')) score += 8;
        break;
        
      case 'balanced':
      default:
        // Keep the default scoring for balanced packages
        break;
    }
    
    return { product, score };
  }).sort((a, b) => b.score - a.score);
  
  // For vegan variation, filter out non-vegan products
  const filteredProducts = variation === 'vegan' 
    ? scoredProducts.filter(p => (p.product.nutrition_claims || []).includes('Vegan Friendly'))
    : scoredProducts;
  
  const packageItems: PackageItem[] = [];
  let totalValue = 0;
  
  // Filter out very expensive products for smaller packages
  const availableProducts = pricePoint < 30 
    ? filteredProducts.filter(p => p.product.price < pricePoint * 0.5)
    : filteredProducts;
  
  // First pass: Add highest scoring products until near the price point
  for (const { product } of availableProducts) {
    if (totalValue + product.price <= pricePoint * 0.9) {
      packageItems.push({ product, quantity: 1 });
      totalValue += product.price;
    }
  }
  
  // Second pass: Try to fill remaining budget with smaller items
  const remainingBudget = pricePoint - totalValue;
  
  if (remainingBudget > 0) {
    const affordableProducts = filteredProducts
      .filter(p => p.product.price <= remainingBudget)
      .sort((a, b) => a.product.price - b.product.price);
    
    if (affordableProducts.length > 0) {
      const bestChoice = affordableProducts[0].product;
      packageItems.push({ product: bestChoice, quantity: 1 });
      totalValue += bestChoice.price;
    }
  }
  
  // Adjust quantities for larger packages
  if (pricePoint >= 99) {
    packageItems.forEach(item => {
      if (item.product.price < 10 && totalValue + item.product.price <= pricePoint) {
        item.quantity += 1;
        totalValue += item.product.price;
      }
    });
  }
  
  return packageItems;
};

// Keep the original functions for backward compatibility
export const getPackagesByPrice = (pricePoint: number): PackageItem[] => {
  return getPackagesByPriceAndVariation(pricePoint, 'balanced');
};

// Get packages optimized for specific nutrition goals
export const getPackagesByNutritionGoal = (goal: 'protein' | 'fiber' | 'lowSugar' | 'vegan', pricePoint: number): PackageItem[] => {
  // Score products based on the selected nutrition goal
  const scoredProducts = [...products].map(product => {
    const claims = product.nutrition_claims || [];
    let score = 0;
    
    switch (goal) {
      case 'protein':
        // Higher score for high protein products
        if (claims.includes('High Protein')) score += 10;
        if (claims.includes('Low Carb')) score += 3;
        if (claims.includes('Omega-3 Rich')) score += 2;
        // For protein goal, penalize vegan slightly (animal proteins are typically more complete)
        if (!claims.includes('Vegan Friendly') && goal === 'protein') score += 1;
        break;
        
      case 'fiber':
        // Higher score for high fiber products
        if (claims.includes('High Fiber')) score += 10;
        if (claims.includes('Low Sugar') || claims.includes('Zero Sugar')) score += 3;
        if (claims.includes('Vegan Friendly')) score += 2; // Plant foods typically have more fiber
        break;
        
      case 'lowSugar':
        // Higher score for low/zero sugar products
        if (claims.includes('Low Sugar')) score += 8;
        if (claims.includes('Zero Sugar')) score += 10;
        if (claims.includes('Low Carb')) score += 5;
        break;
        
      case 'vegan':
        // Only include vegan products
        if (claims.includes('Vegan Friendly')) {
          score += 10;
          // Additional scores for nutritional quality within vegan products
          if (claims.includes('High Protein')) score += 5; // Harder to get in vegan diet
          if (claims.includes('High Fiber')) score += 3;
          if (claims.includes('Omega-3 Rich')) score += 4; // Also harder to get
        } else {
          // Set negative score for non-vegan products to exclude them
          score = -100;
        }
        break;
    }
    
    // For all goals, add a general nutrition quality component
    if (claims.includes('Heart Healthy')) score += 1;
    if (claims.includes('Vitamin Rich')) score += 1;
    
    return { product, score };
  }).sort((a, b) => b.score - a.score);
  
  // Filter out negative scores (non-vegan products for vegan goal)
  const validProducts = scoredProducts.filter(p => p.score >= 0);
  
  // Now use the scored products to build the package
  const packageItems: PackageItem[] = [];
  let totalValue = 0;
  
  // Add highest scoring products until near price point
  for (const { product } of validProducts) {
    if (totalValue + product.price <= pricePoint * 0.9) {
      packageItems.push({ product, quantity: 1 });
      totalValue += product.price;
    }
  }
  
  // Try to fill remaining budget with smaller items that still match the goal
  const remainingBudget = pricePoint - totalValue;
  if (remainingBudget > 0) {
    const affordableMatchingProducts = validProducts
      .filter(p => p.product.price <= remainingBudget && p.score > 0)
      .sort((a, b) => a.product.price - b.product.price); // Get cheapest matching products
    
    if (affordableMatchingProducts.length > 0) {
      const bestChoice = affordableMatchingProducts[0].product;
      packageItems.push({ product: bestChoice, quantity: 1 });
      totalValue += bestChoice.price;
    }
  }
  
  // Adjust quantities for larger packages
  if (pricePoint >= 99) {
    for (const item of packageItems) {
      if (item.product.price < 10 && totalValue + item.product.price <= pricePoint) {
        item.quantity += 1;
        totalValue += item.product.price;
      }
    }
  }
  
  return packageItems;
};

