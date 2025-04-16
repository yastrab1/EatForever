'use client'
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ProductShowcase from '@/components/home/ProductShowcase';
import Newsletter from '@/components/home/Newsletter';
import SocialProof from '@/components/home/SocialProof';
import QualityStandards from '@/components/shared/QualityStandards';
import { FadeIn } from '@/components/ui/motion';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add intersection observer for fade-in animation sections
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade-in').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <Features />
          <SocialProof />
          <ProductShowcase />
          <QualityStandards />
          <div className="py-24 bg-forest-950 text-white">
            <div className="eatforever-container text-center">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  EAT SIMPLE. LIVE LONGER. FOREVER.
                </h2>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
                  We make eating healthy simple and easy for everyone
                </p>
                <a href="/packages" className="inline-block bg-white text-forest-950 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-forest-100 hover:shadow-lg">
                  Explore Longevity Packages
                </a>
              </FadeIn>
            </div>
          </div>
          <Newsletter />
        </main>

        <Footer />
      </div>
  );
};

export default Index;
