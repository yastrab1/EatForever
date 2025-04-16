
// Type definitions for Wolt API integration
// These will need to be updated based on the actual API documentation

export interface WoltVenue {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface WoltProductCategory {
  id: string;
  name: string;
  description?: string;
}

export interface WoltProduct {
  id: string;
  name: string;
  description?: string;
  price: {
    amount: number;
    currency: string;
  };
  image_url?: string;
  category_ids: string[];
  allergens?: string[];
  nutritional_info?: {
    calories?: number;
    proteins?: number;
    carbohydrates?: number;
    fats?: number;
  };
  ingredients?: string[];
}

export interface WoltOrder {
  id: string;
  created_at: string;
  status: 'pending' | 'accepted' | 'rejected' | 'ready_for_delivery' | 'in_delivery' | 'delivered' | 'cancelled';
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  items: WoltOrderItem[];
  total: {
    amount: number;
    currency: string;
  };
  delivery_fee?: {
    amount: number;
    currency: string;
  };
  estimated_delivery_time?: string;
}

export interface WoltOrderItem {
  product_id: string;
  quantity: number;
  price: {
    amount: number;
    currency: string;
  };
  notes?: string;
}

// API response types
export interface WoltApiResponse<T> {
  data: T;
  meta?: {
    page?: number;
    page_size?: number;
    total_count?: number;
  };
}

export interface WoltErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
  };
}
