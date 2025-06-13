import type { EcwidCategoriesResponse } from '@/types/ecwid';

export function useCategories() {
  const storeId = import.meta.env.VITE_ECWID_STORE_ID;
  const TOKEN = import.meta.env.VITE_ECWID_CLIENT_SECRET;

  const fetchCategories = async (parentId?: number): Promise<EcwidCategoriesResponse> => {
    const parentIdParam = parentId ? `?parent=${parentId}` : '';
    const url = `https://app.ecwid.com/api/v3/${storeId}/categories${parentIdParam}`;
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
