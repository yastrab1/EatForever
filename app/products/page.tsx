'use client'
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion';

import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';
import { validateProduct } from '@/utils/product-rules';
import QualityStandards from '@/components/shared/QualityStandards';
import {Product} from "@/types/Products";
import {getProducts} from "@/actions/getProducts";
import {categories} from "@/types/Products";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter products that meet our quality standards first
  const [qualityProducts,setQualityProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState(qualityProducts);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    const load = async() => {
      const products = await getProducts() as Product[];
      setQualityProducts(products.filter(validateProduct))
      return products
    }
    load().then((data)=>{
      setFilteredProducts(data)
    })
  }, []);
  
  useEffect(() => {
    let filtered = qualityProducts;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) ||
        product.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="eatforever-container">
          <FadeIn className="mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Products
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Browse our carefully curated selection of products with 6 or fewer ingredients.
              Each item is selected to support your health and longevity goals.
            </p>
          </FadeIn>
          
          <ProductFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <ProductGrid products={filteredProducts} resetFilters={resetFilters} />
          
          {/* Add Quality Standards section */}
          <div className="mt-24 border-t border-border/40 pt-12">
            <QualityStandards compact showUSP={false} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Page;
