import type { ProductCardItem } from '@/types/productCard';

export const isOnDiscount = (product: ProductCardItem): boolean => {
  return Number(product.discountedPrice) < Number(product.price);
};
