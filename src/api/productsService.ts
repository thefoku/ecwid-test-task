import type { EcwidProductsResponse } from '@/types/ecwid';
import { STORE_ID, TOKEN } from './envConsts';

export function useProducts() {
  const fetchProducts = async (categoryId?: number): Promise<EcwidProductsResponse> => {
    const categoryIdParam = categoryId ? `?category=${categoryId}` : '';
    const url = `https://app.ecwid.com/api/v3/${STORE_ID}/products${categoryIdParam}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return {} as EcwidProductsResponse;
    }
  };

  return {
    fetchProducts,
  };
}
