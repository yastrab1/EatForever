
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion';
import PackageOptions from '@/components/packages/PackageOptions';
import QualityStandards from '@/components/shared/QualityStandards';

const Packages = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="eatforever-container">
                    <FadeIn className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Longevity Packages
                        </h1>
                        <p className="text-muted-foreground max-w-3xl">
                            Our nutritionist-designed packages combine the perfect balance of nutrients at different price points.
                            Choose from price-based options with various dietary preferences or goal-specific packages tailored to your nutritional needs.
                        </p>
                    </FadeIn>

                    <PackageOptions />

                    {/* Add Quality Standards section */}
                    <div className="mt-24 border-t border-border/40 pt-12">
                        <QualityStandards compact showUSP={true} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Packages;
