'use client'
import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Dumbbell, Wheat, Droplets, Leaf, Carrot, Fish, GaugeCircle, Egg } from 'lucide-react';
import PackageCard from './PackageCard';
import { getPackagesByPrice, getPackagesByNutritionGoal, getPackagesByPriceAndVariation, PackageVariation } from '@/utils/package-utils';
import { useForm } from "react-hook-form";

const PackageOptions = () => {
  const [currentTab, setCurrentTab] = useState("price");
  const [pricePoint, setPricePoint] = useState("19.90");
  const [nutritionGoal, setNutritionGoal] = useState<'protein' | 'fiber' | 'lowSugar' | 'vegan'>('protein');
  const [packageVariation, setPackageVariation] = useState<PackageVariation>('balanced');
  
  // Define the price points
  const pricePoints = [
    { value: "9.90", label: "9,90 €" },
    { value: "19.90", label: "19,90 €" },
    { value: "29.90", label: "29,90 €" },
    { value: "49.90", label: "49,90 €" },
    { value: "99.90", label: "99,90 €" },
    { value: "149.00", label: "149 €" },
  ];

  // Define package variations
  const variations = [
    { value: 'balanced', label: 'Balanced', icon: <Egg className="h-5 w-5 text-primary" />, description: 'Well-rounded nutrition' },
    { value: 'protein', label: 'High Protein', icon: <Dumbbell className="h-5 w-5 text-primary" />, description: 'Protein-focused products' },
    { value: 'vegan', label: 'Vegan', icon: <Leaf className="h-5 w-5 text-primary" />, description: 'Plant-based products only' },
    { value: 'lowCarb', label: 'Low Carb', icon: <GaugeCircle className="h-5 w-5 text-primary" />, description: 'Low carb and sugar options' },
  ];

  // Form for the goal-based packages
  const form = useForm({
    defaultValues: {
      goal: 'protein',
    },
  });

  // Handle form submission
  const onSubmit = (data: { goal: string }) => {
    setNutritionGoal(data.goal as 'protein' | 'fiber' | 'lowSugar' | 'vegan');
  };

  // Get the package items based on the selected goal and price
  const getGoalBasedPackage = () => {
    return getPackagesByNutritionGoal(nutritionGoal, parseFloat(pricePoint));
  };

  // Get the variation-based package
  const getVariationBasedPackage = () => {
    return getPackagesByPriceAndVariation(parseFloat(pricePoint), packageVariation);
  };

  // Generate variation title
  const getVariationTitle = () => {
    const variation = variations.find(v => v.value === packageVariation);
    return `${variation?.label || 'Balanced'} ${pricePoint.replace('.', ',')} € Package`;
  };

  return (
    <div>
      <FadeIn delay={150}>
        <Tabs defaultValue="price" onValueChange={setCurrentTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 gap-1">
              <TabsTrigger value="price" className="px-6 py-3">
                Price-Based Packages
              </TabsTrigger>
              <TabsTrigger value="goal" className="px-6 py-3">
                Goal-Based Packages
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Price-based packages tab */}
          <TabsContent value="price" className="mt-0">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1">
                {pricePoints.map((price) => (
                  <TabsTrigger 
                    key={price.value} 
                    value={price.value}
                    className="px-4 py-2"
                    onClick={() => setPricePoint(price.value)}
                  >
                    {price.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-border/40 shadow-sm mb-8">
              <h3 className="text-lg font-medium mb-4">Choose Package Variation</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {variations.map((variation) => (
                  <Label
                    key={variation.value}
                    htmlFor={variation.value}
                    className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors ${
                      packageVariation === variation.value ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setPackageVariation(variation.value as PackageVariation)}
                  >
                    <div className="flex items-center gap-3">
                      {variation.icon}
                      <div>
                        <p className="font-medium">{variation.label}</p>
                        <p className="text-sm text-muted-foreground">{variation.description}</p>
                      </div>
                    </div>
                    <input 
                      type="radio" 
                      id={variation.value} 
                      value={variation.value} 
                      checked={packageVariation === variation.value}
                      onChange={() => {}}
                      className="sr-only"
                    />
                    {packageVariation === variation.value && (
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    )}
                  </Label>
                ))}
              </div>
            </div>
            
            <PackageCard 
              pricePoint={parseFloat(pricePoint)} 
              packageItems={getVariationBasedPackage()}
              title={getVariationTitle()}
            />
          </TabsContent>

          {/* Goal-based packages tab */}
          <TabsContent value="goal" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <Form {...form}>
                <form onChange={() => form.handleSubmit(onSubmit)()} className="mb-8">
                  <div className="bg-white p-6 rounded-lg border border-border/40 shadow-sm mb-8">
                    <h3 className="text-lg font-medium mb-4">Choose Your Nutrition Goal</h3>
                    
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) => {
                                field.onChange(value);
                                setNutritionGoal(value as 'protein' | 'fiber' | 'lowSugar' | 'vegan');
                              }}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              <Label
                                htmlFor="protein"
                                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <Dumbbell className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="font-medium">High Protein</p>
                                    <p className="text-sm text-muted-foreground">For muscle building & recovery</p>
                                  </div>
                                </div>
                                <RadioGroupItem value="protein" id="protein" />
                              </Label>
                              
                              <Label
                                htmlFor="fiber"
                                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <Wheat className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="font-medium">High Fiber</p>
                                    <p className="text-sm text-muted-foreground">For digestive health</p>
                                  </div>
                                </div>
                                <RadioGroupItem value="fiber" id="fiber" />
                              </Label>
                              
                              <Label
                                htmlFor="lowSugar"
                                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <Droplets className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="font-medium">Low Sugar</p>
                                    <p className="text-sm text-muted-foreground">For blood sugar management</p>
                                  </div>
                                </div>
                                <RadioGroupItem value="lowSugar" id="lowSugar" />
                              </Label>
                              
                              <Label
                                htmlFor="vegan"
                                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <Leaf className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="font-medium">Vegan</p>
                                    <p className="text-sm text-muted-foreground">Plant-based nutrition</p>
                                  </div>
                                </div>
                                <RadioGroupItem value="vegan" id="vegan" />
                              </Label>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-4">Select Price Point</h3>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                        {pricePoints.map((price) => (
                          <div
                            key={price.value}
                            onClick={() => setPricePoint(price.value)}
                            className={`text-center px-3 py-2 rounded-md cursor-pointer transition-colors ${
                              pricePoint === price.value 
                                ? 'bg-primary text-white' 
                                : 'bg-secondary hover:bg-primary/10'
                            }`}
                          >
                            {price.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
              
              <PackageCard 
                pricePoint={parseFloat(pricePoint)} 
                packageItems={getGoalBasedPackage()}
                title={`${nutritionGoal.charAt(0).toUpperCase() + nutritionGoal.slice(1)} Focused ${pricePoint.replace('.', ',')} € Package`}
              />
            </div>
          </TabsContent>
        </Tabs>
      </FadeIn>
    </div>
  );
};

export default PackageOptions;
