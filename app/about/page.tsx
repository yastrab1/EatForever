
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, StaggerChildren } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Clock, ListFilter, BarChart3, Users, ShieldCheck } from 'lucide-react';

const Page = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="pb-24">
          <div className="max-6-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn className="space-y-6">
                <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-2">
                  Our Mission
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                  Simple ingredients for a <span className="text-primary">longer</span> life
                </h1>
                <p className="text-lg text-muted-foreground">
                  At Max6, we believe that what you put in your body should be simple, transparent, 
                  and beneficial. Our mission is to make healthy eating effortless by curating foods 
                  with six or fewer high-quality ingredients.
                </p>
                <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </FadeIn>
              
              <FadeIn direction="left">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2232&auto=format&fit=crop" 
                    alt="Fresh, healthy ingredients" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-8">
                      <p className="text-white font-medium text-lg">
                        "Simplicity is the ultimate sophistication."
                      </p>
                      <p className="text-white/80 mt-2">
                        Our philosophy in every product we curate
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-24 bg-secondary/30">
          <div className="max-6-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                These principles guide every decision we make, from the products we select to 
                how we engage with our community.
              </p>
            </FadeIn>
            
            <StaggerChildren 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerAmount={150}
            >
              <div className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <ListFilter className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Purposeful Curation</h3>
                <p className="text-muted-foreground">
                  We carefully select each product based on ingredient quality, transparency, 
                  and nutritional value to ensure you get only the best.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health-First Approach</h3>
                <p className="text-muted-foreground">
                  Every decision we make prioritizes your long-term health and wellbeing, 
                  never compromising quality for convenience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Radical Transparency</h3>
                <p className="text-muted-foreground">
                  We believe you deserve to know exactly what's in your food and where it comes from. 
                  No hidden ingredients, no secrets.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Longevity Focus</h3>
                <p className="text-muted-foreground">
                  We're committed to helping you live better for longer through science-backed 
                  nutritional choices that support healthy aging.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Centered</h3>
                <p className="text-muted-foreground">
                  We believe in building a supportive community around shared values of health, 
                  simplicity, and the pursuit of longevity.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data-Informed</h3>
                <p className="text-muted-foreground">
                  We continuously analyze the latest research to ensure our curation criteria 
                  align with the most current understanding of nutrition science.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-24">
          <div className="max-6-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop" 
                    alt="Our founder" 
                    className="w-full h-[600px] object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
              
              <FadeIn direction="left" className="space-y-6">
                <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-2">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                  From confusion to clarity
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Max6 began with a simple observation: food labels had become increasingly complicated, 
                    with long lists of unrecognizable ingredients making healthy choices difficult.
                  </p>
                  <p>
                    Our founder, after spending hours researching food products for a family member with 
                    health concerns, realized how challenging it was to find truly clean foods. The 
                    solution was elegant in its simplicity: curate only products with 6 or fewer ingredients.
                  </p>
                  <p>
                    This straightforward rule naturally eliminated heavily processed foods and created a 
                    trustworthy standard that anyone could understand. Today, Max6 has grown from that 
                    insight into a comprehensive platform connecting health-conscious consumers with 
                    the simplest, most nutritious foods available.
                  </p>
                  <p>
                    We continue to expand our selection while maintaining our unwavering commitment to 
                    ingredient simplicity, quality, and transparency.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-24 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)]" />
          
          <div className="max-6-container">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Join Our Longevity Journey
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover how simple, thoughtful nutrition can be the foundation of a longer, 
                  healthier life. Experience the Max6 difference today.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Page;
