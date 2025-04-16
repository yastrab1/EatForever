
import { WOLT_CONFIG } from '@/config/wolt.config';
import { WoltApiResponse, WoltErrorResponse, WoltProduct, WoltVenue, WoltOrder } from '@/types/wolt.types';
import { toast } from '@/hooks/use-toast';

// This class will need to be implemented with actual API credentials when available
export class WoltService {
  private apiKey: string = '';
  private baseUrl: string = WOLT_CONFIG.baseUrl;
  
  constructor(apiKey?: string) {
    if (apiKey) {
      this.apiKey = apiKey;
    } else {
      console.warn('WoltService initialized without API key');
    }
  }

  private getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: this.getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        const error = data as WoltErrorResponse;
        throw new Error(error.error.message || 'Unknown error occurred');
      }

      return data as T;
    } catch (error) {
      console.error('Wolt API request failed:', error);
      toast({
        title: 'API Request Failed',
        description: error instanceof Error ? error.message : 'Unknown error occurred',
        variant: 'destructive',
      });
      throw error;
    }
  }

  // Get venues (Wolt merchant locations)
  async getVenues(params?: { country?: string; city?: string }): Promise<WoltApiResponse<WoltVenue[]>> {
    let endpoint = WOLT_CONFIG.endpoints.venues;
    
    if (params) {
      const queryParams = new URLSearchParams();
      if (params.country) queryParams.append('country', params.country);
      if (params.city) queryParams.append('city', params.city);
      
      if (queryParams.toString()) {
        endpoint += `?${queryParams.toString()}`;
      }
    }
    
    return this.request<WoltApiResponse<WoltVenue[]>>(endpoint);
  }

  // Get products from a specific venue
  async getProducts(venueId: string): Promise<WoltApiResponse<WoltProduct[]>> {
    const endpoint = `${WOLT_CONFIG.endpoints.products}?venue_id=${venueId}`;
    return this.request<WoltApiResponse<WoltProduct[]>>(endpoint);
  }

  // Get a specific product by ID
  async getProductById(productId: string): Promise<WoltApiResponse<WoltProduct>> {
    const endpoint = `${WOLT_CONFIG.endpoints.products}/${productId}`;
    return this.request<WoltApiResponse<WoltProduct>>(endpoint);
  }

  // Place an order (to be implemented with actual API)
  async placeOrder(order: Omit<WoltOrder, 'id' | 'created_at' | 'status'>): Promise<WoltApiResponse<WoltOrder>> {
    return this.request<WoltApiResponse<WoltOrder>>(WOLT_CONFIG.endpoints.orders, {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }

  // Get order status
  async getOrderStatus(orderId: string): Promise<WoltApiResponse<WoltOrder>> {
    const endpoint = `${WOLT_CONFIG.endpoints.orders}/${orderId}`;
    return this.request<WoltApiResponse<WoltOrder>>(endpoint);
  }
}

// Create a singleton instance to be used throughout the app
export const woltService = new WoltService();
