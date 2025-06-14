import type { EcwidCategoriesResponse } from '@/types/ecwid';
import { STORE_ID, TOKEN } from './envConsts';

export function useCategories() {
  const fetchCategories = async (parentId?: number): Promise<EcwidCategoriesResponse> => {
    const parentIdParam = parentId ? `?parent=${parentId}` : '';
    const url = `https://app.ecwid.com/api/v3/${STORE_ID}/categories${parentIdParam}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
      }

      return (await response.json()) as EcwidCategoriesResponse;
    } catch (error) {
      console.error('Error fetching categories:', error);

      return {} as EcwidCategoriesResponse;
    }
  };

  return {
    fetchCategories,
  };
}
