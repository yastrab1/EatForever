
import { Product } from '@/components/products/ProductCard';
import { NutritionClaim } from '@/utils/nutrition-claims';

export const products: Product[] = [
  {
    id: 1,
    name: "Pure Almond Butter",
    category: "Spreads",
    ingredients: ["Almonds", "Sea Salt"],
    image: "https://images.unsplash.com/photo-1629093748658-597aa1a44ec3?q=80&w=2650&auto=format&fit=crop",
    price: 12.99,
    health_benefits: ["High in Protein", "Heart Healthy Fats"],
    nutrition_claims: ["High Protein", "Vegan Friendly", "Low Sugar"]
  },
  {
    id: 2,
    name: "Organic Quinoa",
    category: "Grains",
    ingredients: ["100% Organic Quinoa"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=2670&auto=format&fit=crop",
    price: 8.49,
    health_benefits: ["Complete Protein", "High in Fiber"],
    nutrition_claims: ["High Protein", "High Fiber", "Gluten Free"]
  },
  {
    id: 3,
    name: "Wild Salmon Fillets",
    category: "Protein",
    ingredients: ["Wild-Caught Salmon"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2670&auto=format&fit=crop",
    price: 24.99,
    health_benefits: ["Omega-3 Fatty Acids", "High-Quality Protein"],
    nutrition_claims: ["High Protein", "Omega-3 Rich", "Low Carb"]
  },
  {
    id: 4,
    name: "Coconut Water",
    category: "Beverages",
    ingredients: ["Coconut Water"],
    image: "https://images.unsplash.com/photo-1536662788222-6927ce05deba?q=80&w=2574&auto=format&fit=crop",
    price: 5.99,
    health_benefits: ["Electrolytes", "Hydration"],
    nutrition_claims: ["Low Sugar", "Vegan Friendly"]
  },
  {
    id: 5,
    name: "Grass-Fed Beef",
    category: "Protein",
    ingredients: ["100% Grass-Fed Beef"],
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=2670&auto=format&fit=crop",
    price: 18.99,
    health_benefits: ["High in Protein", "B Vitamins"],
    nutrition_claims: ["High Protein", "Low Carb"]
  },
  {
    id: 6,
    name: "Organic Broccoli",
    category: "Vegetables",
    ingredients: ["Organic Broccoli"],
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=2523&auto=format&fit=crop",
    price: 3.99,
    health_benefits: ["High in Fiber", "Vitamin C"],
    nutrition_claims: ["Low Carb", "Low Sugar", "Vegan Friendly"]
  },
  {
    id: 7,
    name: "Avocado Oil",
    category: "Oils",
    ingredients: ["Cold-Pressed Avocados"],
    image: "https://images.unsplash.com/photo-1620054725763-1a2c2127d0c2?q=80&w=2574&auto=format&fit=crop",
    price: 14.99,
    health_benefits: ["Healthy Fats", "High Smoke Point"],
    nutrition_claims: ["Heart Healthy", "Vegan Friendly"]
  },
  {
    id: 8,
    name: "Pasture-Raised Eggs",
    category: "Protein",
    ingredients: ["Pasture-Raised Eggs"],
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=2670&auto=format&fit=crop",
    price: 6.99,
    health_benefits: ["Complete Protein", "B Vitamins"],
    nutrition_claims: ["High Protein", "Vitamin Rich"]
  },
  // New products from the spreadsheet
  {
    id: 9,
    name: "Greek Yogurt",
    category: "Dairy",
    ingredients: ["Milk", "Live Active Cultures"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2670&auto=format&fit=crop",
    price: 4.99,
    health_benefits: ["Probiotics", "Calcium"],
    nutrition_claims: ["High Protein", "Low Sugar"]
  },
  {
    id: 10,
    name: "Rolled Oats",
    category: "Grains",
    ingredients: ["100% Whole Grain Oats"],
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?q=80&w=2670&auto=format&fit=crop",
    price: 3.49,
    health_benefits: ["Sustained Energy", "Heart Health"],
    nutrition_claims: ["High Fiber", "Low Sugar", "Heart Healthy"]
  },
  {
    id: 11,
    name: "Honey",
    category: "Sweeteners",
    ingredients: ["100% Pure Honey"],
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=2670&auto=format&fit=crop",
    price: 8.99,
    health_benefits: ["Natural Sweetener", "Antimicrobial Properties"],
    nutrition_claims: ["Kid Friendly"]
  },
  {
    id: 12,
    name: "Organic Spinach",
    category: "Vegetables",
    ingredients: ["Organic Spinach"],
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2670&auto=format&fit=crop",
    price: 4.49,
    health_benefits: ["Iron", "Antioxidants"],
    nutrition_claims: ["Low Carb", "Vitamin Rich", "Vegan Friendly"]
  },
  {
    id: 13,
    name: "Wild Blueberries",
    category: "Fruits",
    ingredients: ["Wild Blueberries"],
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=2670&auto=format&fit=crop",
    price: 6.99,
    health_benefits: ["Antioxidants", "Brain Health"],
    nutrition_claims: ["Low Sugar", "Vegan Friendly", "Vitamin Rich"]
  },
  {
    id: 14,
    name: "Sweet Potatoes",
    category: "Vegetables",
    ingredients: ["Sweet Potatoes"],
    image: "https://images.unsplash.com/photo-1596097635166-ced8f9a5fba0?q=80&w=2670&auto=format&fit=crop",
    price: 2.99,
    health_benefits: ["Vitamin A", "Fiber"],
    nutrition_claims: ["High Fiber", "Vitamin Rich", "Kid Friendly"]
  },
  {
    id: 15,
    name: "Dark Chocolate",
    category: "Sweets",
    ingredients: ["Cocoa Mass", "Cocoa Butter", "Sugar", "Vanilla"],
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=2670&auto=format&fit=crop",
    price: 5.99,
    health_benefits: ["Antioxidants", "Mood Enhancement"],
    nutrition_claims: ["Low Sugar", "Vegan Friendly"]
  },
  {
    id: 16,
    name: "Chia Seeds",
    category: "Seeds",
    ingredients: ["100% Chia Seeds"],
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=2574&auto=format&fit=crop",
    price: 7.99,
    health_benefits: ["Omega-3", "Fiber"],
    nutrition_claims: ["High Fiber", "Omega-3 Rich", "Vegan Friendly"]
  },
  {
    id: 17,
    name: "Green Tea",
    category: "Beverages",
    ingredients: ["Green Tea Leaves"],
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2670&auto=format&fit=crop",
    price: 4.99,
    health_benefits: ["Antioxidants", "Metabolism Support"],
    nutrition_claims: ["Zero Sugar", "Vegan Friendly"]
  },
  {
    id: 18,
    name: "Lentils",
    category: "Legumes",
    ingredients: ["Dried Lentils"],
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe63d5?q=80&w=2670&auto=format&fit=crop",
    price: 3.49,
    health_benefits: ["Plant Protein", "Iron"],
    nutrition_claims: ["High Protein", "High Fiber", "Vegan Friendly"]
  },
  {
    id: 19,
    name: "Almonds",
    category: "Nuts",
    ingredients: ["Raw Almonds"],
    image: "https://images.unsplash.com/photo-1574570173698-858f8d5aa3a4?q=80&w=2670&auto=format&fit=crop",
    price: 9.99,
    health_benefits: ["Vitamin E", "Healthy Fats"],
    nutrition_claims: ["High Protein", "Heart Healthy", "Vegan Friendly"]
  },
  {
    id: 20,
    name: "Sardines",
    category: "Protein",
    ingredients: ["Sardines", "Olive Oil", "Salt"],
    image: "https://images.unsplash.com/photo-1604431696980-07c347fced3b?q=80&w=2670&auto=format&fit=crop",
    price: 3.99,
    health_benefits: ["Omega-3", "Calcium (with bones)"],
    nutrition_claims: ["High Protein", "Omega-3 Rich", "Low Carb"]
  },
  {
    id: 21,
    name: "Turmeric Powder",
    category: "Spices",
    ingredients: ["Ground Turmeric"],
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=2670&auto=format&fit=crop",
    price: 5.49,
    health_benefits: ["Anti-inflammatory", "Antioxidant"],
    nutrition_claims: ["Vegan Friendly", "Gluten Free", "Zero Sugar"]
  },
  {
    id: 22,
    name: "Kimchi",
    category: "Fermented",
    ingredients: ["Cabbage", "Radish", "Salt", "Chili", "Garlic", "Ginger"],
    image: "https://images.unsplash.com/photo-1583224964978-2d1c9c73bbae?q=80&w=2670&auto=format&fit=crop",
    price: 7.99,
    health_benefits: ["Probiotics", "Vitamin C"],
    nutrition_claims: ["Low Carb", "Vegan Friendly"]
  },
  {
    id: 23,
    name: "Nutritional Yeast",
    category: "Condiments",
    ingredients: ["Inactive Nutritional Yeast"],
    image: "https://images.unsplash.com/photo-1631212306130-c21be94df3ce?q=80&w=2670&auto=format&fit=crop",
    price: 6.49,
    health_benefits: ["B Vitamins", "Plant Protein"],
    nutrition_claims: ["High Protein", "Vegan Friendly", "Gluten Free"]
  },
  {
    id: 24,
    name: "Bone Broth",
    category: "Soups",
    ingredients: ["Bones", "Water", "Apple Cider Vinegar", "Salt", "Herbs"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2671&auto=format&fit=crop",
    price: 8.99,
    health_benefits: ["Collagen", "Amino Acids"],
    nutrition_claims: ["High Protein", "Low Carb"]
  },
  {
    id: 25,
    name: "Olive Oil (Extra Virgin)",
    category: "Oils",
    ingredients: ["Cold-Pressed Olives"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2561&auto=format&fit=crop",
    price: 12.99,
    health_benefits: ["Monounsaturated Fats", "Antioxidants"],
    nutrition_claims: ["Heart Healthy", "Vegan Friendly"]
  },
  {
    id: 26,
    name: "Sauerkraut",
    category: "Fermented",
    ingredients: ["Cabbage", "Salt"],
    image: "https://images.unsplash.com/photo-1603431777007-61db4494a034?q=80&w=2670&auto=format&fit=crop",
    price: 5.99,
    health_benefits: ["Probiotics", "Vitamin C"],
    nutrition_claims: ["Low Carb", "Vegan Friendly", "Zero Sugar"]
  },
  {
    id: 27,
    name: "Mackerel (Canned)",
    category: "Protein",
    ingredients: ["Mackerel", "Water", "Salt"],
    image: "https://images.unsplash.com/photo-1611171711810-bd87df930310?q=80&w=2670&auto=format&fit=crop",
    price: 4.49,
    health_benefits: ["Omega-3", "Vitamin D"],
    nutrition_claims: ["High Protein", "Omega-3 Rich", "Low Carb"]
  },
  {
    id: 28,
    name: "Flaxseeds",
    category: "Seeds",
    ingredients: ["Flaxseeds"],
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe63d5?q=80&w=2670&auto=format&fit=crop",
    price: 4.99,
    health_benefits: ["Omega-3", "Lignans"],
    nutrition_claims: ["High Fiber", "Omega-3 Rich", "Vegan Friendly"]
  },
  {
    id: 29,
    name: "Apple Cider Vinegar",
    category: "Condiments",
    ingredients: ["Fermented Apple Juice"],
    image: "https://images.unsplash.com/photo-1598704710590-dfa39d390a88?q=80&w=2670&auto=format&fit=crop",
    price: 5.49,
    health_benefits: ["Digestive Support", "Blood Sugar Balance"],
    nutrition_claims: ["Zero Sugar", "Vegan Friendly"]
  },
  {
    id: 30,
    name: "Liver (Grass-fed)",
    category: "Protein",
    ingredients: ["Grass-fed Beef Liver"],
    image: "https://images.unsplash.com/photo-1600891965430-ea0d703789b3?q=80&w=2680&auto=format&fit=crop",
    price: 8.99,
    health_benefits: ["Vitamin A", "Iron", "B Vitamins"],
    nutrition_claims: ["High Protein", "Vitamin Rich", "Low Carb"]
  }
];

export const categories = [
  "All", 
  "Protein", 
  "Grains", 
  "Vegetables", 
  "Spreads", 
  "Beverages", 
  "Oils", 
  "Dairy", 
  "Fruits", 
  "Seeds", 
  "Nuts", 
  "Fermented",
  "Condiments",
  "Sweeteners",
  "Spices",
  "Legumes",
  "Soups",
  "Sweets"
];
