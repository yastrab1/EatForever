
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from 'lucide-react';
import { PackageItem } from '@/utils/package-utils';
import { NutritionClaimBadge } from '@/utils/nutrition-claims';

interface PackageCardProps {
  pricePoint: number;
  packageItems: PackageItem[];
  title?: string;
}

const PackageCard = ({ pricePoint, packageItems, title }: PackageCardProps) => {
  // Calculate total protein, fiber, and sugar across all products
  const totalNutrients = packageItems.reduce((acc, item) => {
    const claims = item.product.nutrition_claims || [];
    return {
      protein: acc.protein + (claims.includes('High Protein') ? 1 : 0),
      fiber: acc.fiber + (claims.includes('High Fiber') ? 1 : 0),
      lowSugar: acc.lowSugar + (claims.includes('Low Sugar') || claims.includes('Zero Sugar') ? 1 : 0),
      vegan: acc.vegan + (claims.includes('Vegan Friendly') ? 1 : 0),
    };
  }, { protein: 0, fiber: 0, lowSugar: 0, vegan: 0 });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border/40">
      <div className="bg-primary/5 p-5 border-b border-border/20">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{title || `${pricePoint.toFixed(2).replace('.', ',')} € Package`}</h3>
          <Button className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
        </div>
        
        <div className="flex mt-4 gap-3 flex-wrap">
          {totalNutrients.protein > 0 && (
            <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              {totalNutrients.protein} High Protein Products
            </div>
          )}
          {totalNutrients.fiber > 0 && (
            <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              {totalNutrients.fiber} High Fiber Products
            </div>
          )}
          {totalNutrients.lowSugar > 0 && (
            <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              {totalNutrients.lowSugar} Low/Zero Sugar Products
            </div>
          )}
          {totalNutrients.vegan > 0 && (
            <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              {totalNutrients.vegan} Vegan Products
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-medium mb-4">Package Contents</h4>
        {packageItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-3 border-b last:border-0 border-border/20"
          >
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div>
                <h5 className="font-medium">{item.product.name}</h5>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {item.product.nutrition_claims && item.product.nutrition_claims.map((claim, idx) => (
                    <NutritionClaimBadge key={idx} claim={claim} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-muted-foreground">Qty: {item.quantity}</span>
              <div className="font-medium">{(item.product.price * item.quantity).toFixed(2)} €</div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 bg-secondary/30 p-4 rounded-lg">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Value:</span>
            <span>
              {packageItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
