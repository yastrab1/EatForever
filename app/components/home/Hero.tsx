
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FadeIn } from '../ui/motion';
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl -z-10" />
      
      <div className="eatforever-container py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="flex flex-col space-y-8">
            <FadeIn delay={300} className="space-y-2">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Nature's Simplicity, Life's Longevity
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                <span className="text-primary">EAT SIMPLE.</span> <br />
                <span className="text-forest-900">LIVE LONGER.</span> <br />
                <span className="text-primary">FOREVER</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={600} className="max-w-lg">
              <p className="text-lg text-muted-foreground">
                We make eating healthy simple and easy for everyone with curated 
                food products with 6 or fewer ingredients to bring simplicity
                and clarity to your health journey.
              </p>
            </FadeIn>
            
            <FadeIn delay={900}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={"/products"}>
                <Button
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-md px-8"
                >
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 text-foreground"
                >
                  Learn More
                </Button>
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={1200}>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <p className="text-3xl font-bold text-foreground">500+</p>
                  <p className="text-muted-foreground">Curated Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">≤6</p>
                  <p className="text-muted-foreground">Ingredients Each</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-muted-foreground">Transparency</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Image Column */}
          <FadeIn 
            delay={800} 
            direction="left"
            className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-full">
              {/* Main circular background */}
              <div className="absolute inset-0 rounded-full bg-secondary"></div>
              
              {/* Product image container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?q=80&w=1287&auto=format&fit=crop"
                  alt="Curated products" 
                  className="w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl animate-float"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 right-12 glass-panel px-4 py-2 rounded-lg animate-float shadow-lg">
                <p className="text-sm font-medium">Just 6 ingredients</p>
              </div>
              
              <div className="absolute -bottom-2 -left-4 glass-panel px-4 py-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm font-medium">100% Natural</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
