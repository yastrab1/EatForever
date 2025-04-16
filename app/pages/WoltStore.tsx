
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FadeIn, StaggerChildren } from '@/components/ui/motion';
import { ArrowRight, Store, MapPin, AlertCircle } from 'lucide-react';
import { WOLT_CONFIG } from '@/config/wolt.config';
import { useToast } from '@/hooks/use-toast';

const WoltStore = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check if we have API key in localStorage (for demo purposes)
    const savedApiKey = localStorage.getItem('wolt_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsConfigured(true);
    }
  }, []);

  const handleConfigureWolt = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter a valid Wolt API key to continue.",
        variant: "destructive",
      });
      return;
    }

    // Save the API key (for demo purposes only - in production use secure storage)
    localStorage.setItem('wolt_api_key', apiKey);
    setIsConfigured(true);
    
    toast({
      title: "Wolt Integration Configured",
      description: "Your Wolt API key has been saved for this session.",
      variant: "default",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Wolt Integration
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Connect to Wolt's marketplace to discover and purchase grocery items
              with 6 or fewer ingredients from Wolt's warehouses in the CEE region.
            </p>
          </FadeIn>
          
          {!isConfigured ? (
            <FadeIn delay={150} className="border p-6 rounded-lg shadow-sm max-w-md mx-auto">
              <h2 className="text-xl font-medium mb-4">Configure Wolt Integration</h2>
              <p className="text-sm text-muted-foreground mb-6">
                To connect to Wolt's API, you need to enter your API credentials. 
                In a production environment, this would be handled securely through the backend.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Wolt API Key</label>
                  <Input 
                    type="password"
                    placeholder="Enter your Wolt API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleConfigureWolt}
                  className="w-full"
                >
                  Configure Integration
                </Button>
              </div>
            </FadeIn>
          ) : (
            <div className="space-y-12">
              <FadeIn delay={150} className="border p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Select Region</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      localStorage.removeItem('wolt_api_key');
                      setApiKey('');
                      setIsConfigured(false);
                    }}
                  >
                    Reset Configuration
                  </Button>
                </div>
                
                <div className="max-w-xs">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {WOLT_CONFIG.supportedRegions.map((region) => (
                        <SelectItem key={region.code} value={region.code}>
                          {region.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="border-t pt-10">
                  <h2 className="text-xl font-medium mb-6">Available Wolt Locations</h2>
                  
                  {!selectedRegion ? (
                    <div className="flex items-center justify-center p-12 border rounded-lg bg-muted/20">
                      <div className="text-center">
                        <MapPin className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">
                          Select a region to see available Wolt locations
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-12 border rounded-lg bg-muted/20">
                      <AlertCircle className="h-10 w-10 mx-auto text-amber-500 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Integration Ready</h3>
                      <p className="text-muted-foreground mb-6">
                        This is a placeholder for the Wolt API integration. In a complete implementation,
                        this would show actual Wolt locations for the selected region.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Selected region: <span className="font-medium">{
                          WOLT_CONFIG.supportedRegions.find(r => r.code === selectedRegion)?.name
                        }</span>
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WoltStore;
