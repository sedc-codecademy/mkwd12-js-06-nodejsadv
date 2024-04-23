export interface ProductFilters {
  title?: string;
  inStock?: boolean;
  orderBy?: 'price' | 'stock';
  firstResult?: number;
  maxResults?: number;
}
