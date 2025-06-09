export function useProducts() {
  const storeId = import.meta.env.VITE_ECWID_STORE_ID
  const TOKEN = import.meta.env.VITE_ECWID_CLIENT_SECRET

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://app.ecwid.com/api/v3/${storeId}/products`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('Fetched products:', data)
      return data
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  }

  return { fetchProducts }
}
