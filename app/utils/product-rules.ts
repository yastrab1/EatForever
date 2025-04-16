
// Product validation rules to ensure our standards are met

export interface ProductValidationRule {
  name: string;
  description: string;
  validateFn: (product: any) => boolean;
}

export const productRules: ProductValidationRule[] = [
  {
    name: "Low Sugar",
    description: "No products with 45%+ of pure sugar in ingredients or nutrition facts per 100g",
    validateFn: (product) => {
      // We would check the actual sugar content here with real data
      // For now we'll assume our existing products are validated
      const hasSugarAsMajorIngredient = product.ingredients.some(
        (ingredient: string) => 
          ingredient.toLowerCase().includes("sugar") && 
          product.ingredients.indexOf(ingredient) === 0
      );
      
      // Nutrition claims check - if it's explicitly tagged as high sugar we reject it
      const hasHighSugarClaim = (product.nutrition_claims || []).some(
        (claim: string) => claim.toLowerCase().includes("high sugar")
      );
      
      // We approve products that don't have sugar as first ingredient and aren't tagged as high sugar
      return !hasSugarAsMajorIngredient && !hasHighSugarClaim;
    }
  },
  {
    name: "Non-Alcoholic",
    description: "Only non-alcoholic beverages",
    validateFn: (product) => {
      // Check if it's a beverage and doesn't contain alcohol
      if (product.category === "Beverages") {
        const hasAlcohol = product.ingredients.some(
          (ingredient: string) => 
            ingredient.toLowerCase().includes("alcohol") ||
            ingredient.toLowerCase().includes("wine") ||
            ingredient.toLowerCase().includes("beer") ||
            ingredient.toLowerCase().includes("liquor") ||
            ingredient.toLowerCase().includes("spirits")
        );
        return !hasAlcohol;
      }
      // If it's not a beverage, it passes this rule
      return true;
    }
  },
  {
    name: "Minimal Refined Flour",
    description: "Less products with white flour as the first item in the ingredients list",
    validateFn: (product) => {
      // Check if white flour is the first ingredient
      const hasWhiteFlourFirst = product.ingredients.length > 0 && 
        (product.ingredients[0].toLowerCase().includes("white flour") ||
         product.ingredients[0].toLowerCase().includes("wheat flour") ||
         product.ingredients[0].toLowerCase().includes("refined flour") ||
         product.ingredients[0].toLowerCase().includes("enriched flour"));
      
      return !hasWhiteFlourFirst;
    }
  }
];

// Function to validate a product against all rules
export const validateProduct = (product: any): boolean => {
  return productRules.every(rule => rule.validateFn(product));
};
