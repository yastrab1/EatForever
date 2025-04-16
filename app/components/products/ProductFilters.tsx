
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
      <FadeIn delay={300} className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-primary text-white" : ""}
          >
            {category}
          </Button>
        ))}
      </FadeIn>
      
      <FadeIn delay={450} className="w-full md:w-auto max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 bg-white border-border/50 focus:border-primary"
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default ProductFilters;
