import type { EcwidProduct } from './ecwid';

export interface ProductCardItem {
  title: string;
  price: string;
  discountedPrice?: string | null;
  description?: string;
  imageURL: string;
  slug: string;
  sku: string;
  currentProduct: EcwidProduct;
}
