export interface Product {
    id: number;
    name: string;
    category: string;
    ingredients: string[];
    image: string;
    price: number;
    health_benefits?: string[];
    nutrition_claims?: NutritionClaim[];
}

export type NutritionClaim =
    | 'High Protein'
    | 'High Fiber'
    | 'Low Sugar'
    | 'Low Carb'
    | 'Vegan Friendly'
    | 'Zero Sugar'
    | 'Gluten Free'
    | 'Heart Healthy'
    | 'Omega-3 Rich'
    | 'Vitamin Rich'
    | 'Kid Friendly';

export type categories = [
        "All" |
        "Protein" |
        "Grains" |
        "Vegetables" |
        "Spreads" |
        "Beverages" |
        "Oils" |
        "Dairy" |
        "Fruits" |
        "Seeds" |
        "Nuts" |
        "Fermented" |
        "Condiments" |
        "Sweeteners" |
        "Spices" |
        "Legumes" |
        "Soups" |
        "Sweets"
];

