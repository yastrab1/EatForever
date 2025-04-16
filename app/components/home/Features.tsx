
import { Check, ShieldCheck, HeartPulse, Sprout, Clock, BarChart3 } from 'lucide-react';
import { StaggerChildren, FadeIn } from '../ui/motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Strict Curation",
      description: "Every product meets our rigorous standards of 6 or fewer ingredients.",
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Health-Focused",
      description: "Items selected to support your long-term health and longevity goals.",
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Natural Ingredients",
      description: "Clean, recognizable ingredients with no artificial additives.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving",
      description: "Skip the label reading—we've already done the hard work for you.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Personalized Options",
      description: "Solutions that adapt to your dietary preferences and restrictions.",
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Complete Transparency",
      description: "Full disclosure on sourcing, nutrition, and environmental impact.",
    },
  ];

  return (
    <section className="py-24 bg-forest-950/5">
      <div className="eatforever-container">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-primary">EatForever</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe that simplicity leads to better health. Here's how our approach
            helps you achieve your longevity goals.
          </p>
        </FadeIn>

        <StaggerChildren 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerAmount={150}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default Features;
