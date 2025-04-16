
import { useState, useCallback } from 'react';
import { WoltService } from '@/services/wolt.service';
import { WoltApiResponse, WoltProduct, WoltVenue } from '@/types/wolt.types';
import { mapWoltProductsToAppProducts } from '@/utils/wolt-product-mapper';

interface UseWoltApiOptions {
  apiKey?: string;
}

/**
 * Hook for interacting with the Wolt API
 */
export const useWoltApi = (options?: UseWoltApiOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Create Wolt service instance
  const woltService = new WoltService(options?.apiKey);

  // Get venues by region
  const getVenuesByRegion = useCallback(async (countryCode: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await woltService.getVenues({ country: countryCode });
      setIsLoading(false);
      return response.data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch venues');
      setError(error);
      setIsLoading(false);
      return [] as WoltVenue[];
    }
  }, [woltService]);

  // Get products from a venue
  const getProductsFromVenue = useCallback(async (venueId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await woltService.getProducts(venueId);
      setIsLoading(false);
      
      // For now, we'll use a simple mapping for categories
      // In a real implementation, you'd fetch categories from the API
      const categoryMap: Record<string, string> = {
        // Map Wolt category IDs to our app's categories
        'grocery': 'Groceries',
        'meat': 'Protein',
        'dairy': 'Protein',
        'vegetables': 'Vegetables',
        'fruits': 'Fruits',
        'bakery': 'Grains',
        'drinks': 'Beverages',
        'snacks': 'Snacks',
      };
      
      // Map Wolt products to our app's product format
      const appProducts = mapWoltProductsToAppProducts(response.data, categoryMap);
      return appProducts;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch products');
      setError(error);
      setIsLoading(false);
      return [];
    }
  }, [woltService]);

  return {
    isLoading,
    error,
    getVenuesByRegion,
    getProductsFromVenue,
  };
};
