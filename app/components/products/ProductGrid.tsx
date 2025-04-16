
import React from 'react';
import { StaggerChildren } from '@/components/ui/motion';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  resetFilters: () => void;
}

const ProductGrid = ({ products, resetFilters }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-medium mb-2">No products found</p>
        <p className="text-muted-foreground mb-6">
          Try adjusting your search or filters to find what you're looking for.
        </p>
        <Button 
          onClick={resetFilters}
          variant="outline"
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <StaggerChildren 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      staggerAmount={100}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StaggerChildren>
  );
};

export default ProductGrid;
