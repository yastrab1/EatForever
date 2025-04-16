
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from '../ui/motion';
import { useToast } from "@/components/ui/use-toast";
import { Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive updates and special offers.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent)]" />
      
      <div className="max-6-container">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Join the EatForever Community
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter for curated health tips, exclusive product announcements, 
              and special offers tailored to your longevity journey.
            </p>
          </FadeIn>
          
          <FadeIn delay={300} className="mt-10">
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting || isSubscribed}
                className="bg-white border-border/30 focus:border-primary focus:ring-primary"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting || isSubscribed}
                className={`bg-primary text-white hover:bg-primary/90 ${isSubscribed ? 'bg-green-600 hover:bg-green-600' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </span>
                ) : isSubscribed ? (
                  <span className="flex items-center">
                    <Check className="mr-1 h-4 w-4" /> Subscribed
                  </span>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and to receive marketing communications from EatForever.
            </p>
          </FadeIn>
          
          <FadeIn delay={600} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/30">
              <span className="text-3xl font-bold text-primary mb-2 block">Weekly</span>
              <p className="text-muted-foreground">Curated recipes using EatForever products</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/30">
              <span className="text-3xl font-bold text-primary mb-2 block">Monthly</span>
              <p className="text-muted-foreground">Exclusive member discounts and early access</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/30">
              <span className="text-3xl font-bold text-primary mb-2 block">Always</span>
              <p className="text-muted-foreground">Science-backed longevity insights</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
