import { useProducts } from '@/services/productService'
import type { EcwidProduct, ProductCardItem } from '@/types/ecwid'
import { parseProductCards } from '@/utils/Catalog/parseEcwidProducts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const { fetchProducts } = useProducts()

  const products = ref<EcwidProduct[]>([])
  const allProducts = ref<EcwidProduct[]>([])
  const currentPageProducts = ref<ProductCardItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function loadProducts(
    categoryId: number | null = null,
  ): Promise<EcwidProduct[] | undefined> {
    if (products.value.length > 0) return

    loading.value = true
    error.value = null

    try {
      const data = await fetchProducts(categoryId)
      if ('items' in data) {
        console.log('Fetched products:', data.items)
        products.value = data.items
        currentPageProducts.value = parseProductCards(data.items)
      }
      return data.items
    } catch (err) {
      console.error('Error when fetching products:', err)
      error.value = 'Failed to load products'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    allProducts,
    currentPageProducts,
    loading,
    error,
    loadProducts,
  }
})
