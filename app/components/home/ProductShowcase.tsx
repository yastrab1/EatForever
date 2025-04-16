
import {useEffect, useState} from 'react';
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren } from '../ui/motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import { validateProduct } from '@/utils/product-rules';
import {getProducts} from "@/actions/getProducts";
import {Product} from "@/types/Products";
import Link from "next/link";

const ProductShowcase = () => {
  const [qualityProducts, setQualityProducts] = useState<Product[]>([]);
  useEffect(() => {
    const load = async ()=> {
      const products = await getProducts() as Product[]
      // Filter products that meet our quality standards
     setQualityProducts(products.filter(validateProduct));
    }
    load()
  }, []);

  // Display first 4 qualified products on homepage
  const showcaseProducts = qualityProducts.slice(0, 4); 
  
  return (
    <section className="py-24">
      <div className="eatforever-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <FadeIn className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Discover our selection of carefully curated products with six ingredients or fewer.
              Clean, simple, and effective.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <Link href={"/products"}>
              <Button
                variant="outline"
                className="mt-6 md:mt-0"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        <StaggerChildren 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerAmount={150}
        >
          {showcaseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ProductShowcase;
