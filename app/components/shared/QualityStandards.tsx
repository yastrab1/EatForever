
import React from 'react';
import { FadeIn, StaggerChildren } from '@/components/ui/motion';
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Leaf, GaugeCircle, Droplets, BadgeCheck, Wheat } from 'lucide-react';
import { productRules } from '@/utils/product-rules';

interface StandardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StandardCard = ({ icon, title, description }: StandardCardProps) => (
  <Card className="border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-md">
    <div className="h-2 bg-primary"></div>
    <CardContent className="pt-6">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

const USP = () => (
  <div className="bg-forest-950 text-white rounded-2xl p-8 mb-12">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/4 flex justify-center">
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
          <BadgeCheck className="w-12 h-12 text-primary-foreground" />
        </div>
      </div>
      <div className="md:w-3/4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
          Our Unique Promise: Maximum 6 Ingredients
        </h2>
        <p className="text-white/80">
          Every product in our catalog meets our signature standard: no more than 6 ingredients.
          This commitment means simpler food, clearer nutritional value, and ultimately better
          health outcomes for you. We've done the hard work of researching and vetting products
          so you don't have to read countless ingredient labels.
        </p>
      </div>
    </div>
  </div>
);

interface QualityStandardsProps {
  showUSP?: boolean;
  compact?: boolean;
  className?: string;
}

const QualityStandards = ({ showUSP = true, compact = false, className = '' }: QualityStandardsProps) => {
  // Define our standard cards
  const standards = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Low Sugar",
      description: "We reject products with excessive sugar content, keeping your blood glucose stable and metabolism healthy."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Non-Alcoholic",
      description: "Our beverage selection excludes all alcoholic options to promote health and wellness for everyone."
    },
    {
      icon: <Wheat className="w-6 h-6" />,
      title: "Minimal Refined Flour",
      description: "We avoid products with refined white flour as the main ingredient to support better digestive health."
    },
    {
      icon: <GaugeCircle className="w-6 h-6" />,
      title: "Nutrient Dense",
      description: "We prioritize foods with high nutritional value relative to their calorie content."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Sourced",
      description: "We verify the origin of our products to ensure they meet our strict quality standards."
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Transparency",
      description: "Complete disclosure of all ingredients, sourcing, and nutritional information for all products."
    },
  ];

  // If compact is true, only show the first 3 standards
  const displayStandards = compact ? standards.slice(0, 3) : standards;

  return (
    <section className={`py-12 ${className}`}>
      <div className="eatforever-container">
        <FadeIn className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Quality Standards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe that what's not in your food is just as important as what is. 
            Every product meets our strict standards for simplicity and quality.
          </p>
        </FadeIn>
        
        {/* Unique Selling Proposition */}
        {showUSP && (
          <FadeIn>
            <USP />
          </FadeIn>
        )}
        
        {/* Standards Cards */}
        <StaggerChildren 
          className={`grid grid-cols-1 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}
          staggerAmount={150}
        >
          {displayStandards.map((standard, index) => (
            <StandardCard
              key={index}
              icon={standard.icon}
              title={standard.title}
              description={standard.description}
            />
          ))}
        </StaggerChildren>
        
        {compact && (
          <div className="text-center mt-8">
            <a href="/about" className="inline-block text-primary font-medium hover:text-primary/80 transition-colors">
              Learn more about our standards →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default QualityStandards;
