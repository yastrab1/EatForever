
export const WOLT_CONFIG = {
  // Base URL for Wolt API, to be updated with the real one when available
  baseUrl: "https://restaurant-api.wolt.com/v1/",
  // CEE region countries supported by Wolt
  supportedRegions: [
    { code: "CZ", name: "Czech Republic" },
    { code: "SK", name: "Slovakia" },
    { code: "HU", name: "Hungary" },
    { code: "PL", name: "Poland" },
    { code: "RO", name: "Romania" },
    { code: "HR", name: "Croatia" },
    { code: "SL", name: "Slovenia" },
    { code: "LT", name: "Lithuania" },
    { code: "LV", name: "Latvia" },
    { code: "EE", name: "Estonia" }
  ],
  // Endpoints will need to be updated based on actual Wolt API documentation
  endpoints: {
    venues: "merchants/venues",
    products: "merchants/menu-items",
    categories: "merchants/categories",
    orders: "merchants/orders"
  }
};
