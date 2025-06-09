import type { EcwidCategoriesResponse } from '@/types/ecwid'

export function useCategories() {
  const storeId = import.meta.env.VITE_ECWID_STORE_ID
  const TOKEN = import.meta.env.VITE_ECWID_CLIENT_SECRET

  const fetchCategories = async () => {
    try {
      const response = await fetch(`https://app.ecwid.com/api/v3/${storeId}/categories`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`)
      }

      const data: EcwidCategoriesResponse = await response.json()
      console.log('Fetched categories:', data)
      return data
    } catch (error) {
      console.error('Error fetching categories:', error)
      return []
    }
  }

  return { fetchCategories }
}
