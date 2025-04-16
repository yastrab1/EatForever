'use client'
import {useEffect, useState} from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {Button} from "@/components/ui/button";
import {FadeIn} from '@/components/ui/motion';
import {ArrowLeft, ShoppingCart, Check} from 'lucide-react';

import {Product} from '@/components/products/ProductCard';
import {NutritionClaimBadge} from '@/utils/nutrition-claims';
import {useParams} from "next/navigation";
import Link from "next/link";
import {getProducts} from "@/actions/getProducts";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const load = async () => {
            // Scroll to top on page load
            window.scrollTo(0, 0);

            // Find the product by ID
            const productId = parseInt(id || '0');
            const foundProduct = (await getProducts() as Product[]).find(p => p.id === productId) || null;
            setProduct(foundProduct);
        }
        load()
    }, [id]);

    if (!product) {
        return (
            <div className="flex flex-col min-h-screen bg-background">
                <Navbar/>
                <main className="flex-grow pt-32 pb-24">
                    <div className="eatforever-container">
                        <div className="text-center py-16">
                            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or
                                has been removed.</p>
                            <Link href={"/products"}>
                                <Button>
                                    <ArrowLeft className="mr-2 h-4 w-4"/>
                                    Back to Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar/>

            <main className="flex-grow pt-32 pb-24">
                <div className="eatforever-container">
                    <Link href={"/products"}>
                        <Button
                            variant="ghost"

                            className="mb-8"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4"/>
                            Back to Products
                        </Button>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <FadeIn>
                            <div className="rounded-lg overflow-hidden bg-secondary/20">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-cover aspect-square"
                                />
                            </div>
                        </FadeIn>

                        {/* Product Details */}
                        <FadeIn delay={300}>
                            <div className="space-y-6">
                                <div>
                  <span
                      className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-1 mb-2">
                    {product.category}
                  </span>
                                    <h1 className="text-3xl md:text-4xl font-display font-bold">
                                        {product.name}
                                    </h1>
                                    <p className="text-2xl font-bold mt-2">${product.price}</p>
                                </div>

                                {product.nutrition_claims && product.nutrition_claims.length > 0 && (
                                    <div className="pt-2">
                                        <div className="flex flex-wrap gap-2">
                                            {product.nutrition_claims.map((claim, idx) => (
                                                <NutritionClaimBadge key={idx} claim={claim}/>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <h2 className="text-lg font-semibold mb-3">Description</h2>
                                    <p className="text-muted-foreground">
                                        Our {product.name} is carefully selected to meet our strict quality
                                        standards.
                                        With only {product.ingredients.length} ingredients, it follows our
                                        philosophy
                                        of simple, clean eating for longevity.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <h2 className="text-lg font-semibold">Ingredients</h2>
                                    <ul className="space-y-2">
                                        {product.ingredients.map((ingredient, idx) => (
                                            <li key={idx} className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-3 w-3"/>
                        </span>
                                                {ingredient}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {product.health_benefits && (
                                    <div className="space-y-4 pt-2">
                                        <h2 className="text-lg font-semibold">Health Benefits</h2>
                                        <ul className="space-y-2">
                                            {product.health_benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start">
                          <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                            <Check className="h-3 w-3"/>
                          </span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        <ShoppingCart className="mr-2 h-4 w-4"/>
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};
