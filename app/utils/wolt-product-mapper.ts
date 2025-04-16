
import { WoltProduct } from '@/types/wolt.types';

// Interface matching our app's product model
interface AppProduct {
  id: number;
  name: string;
  category: string;
  ingredients: string[];
  image: string;
  price: number;
  health_benefits?: string[];
}

/**
 * Maps a Wolt product to our application's product format
 */
export const mapWoltProductToAppProduct = (woltProduct: WoltProduct, categoryMap: Record<string, string>): AppProduct => {
  // Generate a numeric ID (in production, you'd want to store a mapping between Wolt IDs and your app IDs)
  const numericId = parseInt(woltProduct.id.replace(/\D/g, '').slice(0, 8));
  
  return {
    id: numericId || Math.floor(Math.random() * 10000),
    name: woltProduct.name,
    // Map the first category ID to our app's category format, fallback to "Other"
    category: woltProduct.category_ids && woltProduct.category_ids.length > 0 
      ? (categoryMap[woltProduct.category_ids[0]] || "Other") 
      : "Other",
    // Use ingredients from Wolt or provide a default
    ingredients: woltProduct.ingredients || ["Ingredients not specified"],
    // Use image from Wolt or provide a default placeholder
    image: woltProduct.image_url || "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=2670&auto=format&fit=crop",
    // Convert price to a number format our app uses
    price: woltProduct.price.amount / 100, // Assuming Wolt uses cents
    // For health benefits, we'd need additional data processing or manual curation
    health_benefits: deriveHealthBenefits(woltProduct),
  };
};

/**
 * Derive potential health benefits based on product data
 * Note: This is a simplified example. In a real app, this would be more sophisticated
 * or based on curated data.
 */
const deriveHealthBenefits = (product: WoltProduct): string[] => {
  const benefits: string[] = [];
  
  // Example logic to derive benefits (would need refinement based on actual data)
  if (product.nutritional_info?.proteins && product.nutritional_info.proteins > 10) {
    benefits.push("High in Protein");
  }
  
  if (product.nutritional_info?.carbohydrates && product.nutritional_info.carbohydrates < 5) {
    benefits.push("Low Carb");
  }
  
  if (product.ingredients && product.ingredients.length <= 6) {
    benefits.push("Simple Ingredients");
  }
  
  // Default benefit if none derived
  if (benefits.length === 0) {
    benefits.push("Natural Ingredients");
  }
  
  return benefits;
};

/**
 * Maps multiple Wolt products to our application format
 */
export const mapWoltProductsToAppProducts = (
  woltProducts: WoltProduct[], 
  categoryMap: Record<string, string>
): AppProduct[] => {
  return woltProducts.map(product => mapWoltProductToAppProduct(product, categoryMap));
};
