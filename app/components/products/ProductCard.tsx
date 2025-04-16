
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BadgeCheck } from 'lucide-react';
import { NutritionClaimBadge, NutritionClaim } from '@/utils/nutrition-claims';
import {useRouter} from "next/navigation";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter()
  const handleViewProduct = () => {
    router.push(`/products/${product.id}`);
  };
  
  return (
    <div className="product-card group">
      <div className="aspect-[4/3] w-full overflow-hidden cursor-pointer relative" onClick={handleViewProduct}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Quality verification badge */}
        {product.ingredients.length <= 6 && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium rounded-full px-2 py-1 flex items-center shadow-md">
            <BadgeCheck className="h-3 w-3 mr-1" /> 
            <span>Verified</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-1">
              {product.category}
            </span>
            <h3 className="text-lg font-medium mt-2 cursor-pointer hover:text-primary" onClick={handleViewProduct}>
              {product.name}
            </h3>
          </div>
          <span className="font-semibold">
            ${product.price}
          </span>
        </div>
        
        {/* Quality standards tag */}
        <div className="mt-2 mb-2">
          <div className="flex items-center text-xs text-forest-900 bg-forest-100 rounded-full px-2 py-1 w-fit ">
            <span className="font-medium">{product.ingredients.length} ingredients only</span>
          </div>
        </div>
        
        {product.nutrition_claims && product.nutrition_claims.length > 0 && (
          <div className="mt-2">
            <div className="flex flex-wrap gap-1.5">
              {product.nutrition_claims.map((claim, idx) => (
                <NutritionClaimBadge key={idx} claim={claim} />
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <p className="text-sm font-medium text-muted-foreground mb-1">Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {product.ingredients.map((ingredient, idx) => (
              <span 
                key={idx} 
                className="inline-block text-xs bg-secondary px-2 py-1 rounded"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        
        {product.health_benefits && (
          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground mb-1">Benefits:</p>
            <div className="flex flex-wrap gap-1">
              {product.health_benefits.map((benefit, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center text-xs text-primary px-2 py-1 rounded"
                >
                  <Check className="h-3 w-3 mr-1" /> {benefit}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/5 justify-start p-0 h-auto"
          onClick={handleViewProduct}
        >
          <span>View Product</span>
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
