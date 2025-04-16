
import React from 'react';
import { FadeIn, StaggerChildren } from '@/components/ui/motion';
import { Star, Users, Award, CreditCard, BadgeCheck } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial = ({ quote, author, role }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
    <p className="text-muted-foreground mb-4">{quote}</p>
    <div>
      <p className="font-medium">{author}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  </div>
);

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
      {icon}
    </div>
    <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const SocialProof = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="eatforever-container">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Trusted by Health-Conscious Consumers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of customers who have made EatForever their trusted source for 
            clean, simple products that support longevity and health.
          </p>
        </FadeIn>
        
        {/* Stats Section */}
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20" staggerAmount={150}>
          <StatCard 
            icon={<Users className="w-7 h-7" />} 
            value="10,000+" 
            label="Happy Customers" 
          />
          <StatCard 
            icon={<BadgeCheck className="w-7 h-7" />} 
            value="500+" 
            label="Verified Page"
          />
          <StatCard 
            icon={<Award className="w-7 h-7" />} 
            value="99%" 
            label="Satisfaction Rate" 
          />
          <StatCard 
            icon={<CreditCard className="w-7 h-7" />} 
            value="45,000+" 
            label="Orders Completed" 
          />
        </StaggerChildren>
        
        {/* Testimonials Section */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-10">What Our Customers Say</h3>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerAmount={150}>
            <Testimonial 
              quote="EatForever has completely changed how I shop for groceries. I trust that every product I buy meets the highest standards for my health."
              author="Sarah K."
              role="Member since 2023"
            />
            <Testimonial 
              quote="I love how transparent they are about ingredients. With only 6 or fewer ingredients in each product, I finally know exactly what I'm eating."
              author="Michael T."
              role="Nutrition Coach"
            />
            <Testimonial 
              quote="As someone with dietary restrictions, finding simple, clean products is a challenge. EatForever makes it easy and saves me so much time."
              author="Leila J."
              role="Fitness Enthusiast"
            />
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
