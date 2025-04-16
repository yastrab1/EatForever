
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WOLT_CONFIG } from '@/config/wolt.config';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FadeIn } from '@/components/ui/motion';

const AdminWoltSettings = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLive, setIsLive] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Load existing settings from localStorage as a placeholder
    // In a real implementation, this would come from a database
    const savedApiKey = localStorage.getItem('wolt_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
    
    const savedRegion = localStorage.getItem('wolt_region');
    if (savedRegion) {
      setSelectedRegion(savedRegion);
    }
  }, []);

  const handleSaveSettings = () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter a valid Wolt API key to continue.",
        variant: "destructive",
      });
      return;
    }

    // Save settings to localStorage (for demo purposes)
    localStorage.setItem('wolt_api_key', apiKey);
    
    if (selectedRegion) {
      localStorage.setItem('wolt_region', selectedRegion);
    }
    
    toast({
      title: "Settings Saved",
      description: "Your Wolt integration settings have been updated.",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <FadeIn>
        <Card>
          <CardHeader>
            <CardTitle>Wolt API Configuration</CardTitle>
            <CardDescription>
              Connect your Wolt merchant account to display products from Wolt's marketplace
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input 
                id="api-key" 
                type="password" 
                value={apiKey} 
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Wolt API key"
              />
              <p className="text-sm text-muted-foreground">
                This key is used to authenticate requests to the Wolt API
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="region">Primary Region</Label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select a region" />
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
            
            <div className="space-y-2">
              <Label htmlFor="webhook">Webhook URL</Label>
              <Input 
                id="webhook" 
                value={webhookUrl} 
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://your-backend.com/api/wolt-webhook"
              />
              <p className="text-sm text-muted-foreground">
                URL that will receive order notifications from Wolt
              </p>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Switch id="live-mode" checked={isLive} onCheckedChange={setIsLive} />
              <Label htmlFor="live-mode">Enable Live Mode</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Settings</Button>
          </CardFooter>
        </Card>
      </FadeIn>
      
      <FadeIn delay={150}>
        <Card>
          <CardHeader>
            <CardTitle>Connected Venues</CardTitle>
            <CardDescription>
              Wolt venues that are linked to your store
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Venue Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Products</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Wolt Store Demo</TableCell>
                  <TableCell>Prague</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
};

export default AdminWoltSettings;
