import { useProducts } from '@/services/productService'
import type { EcwidProduct, ProductCardItem } from '@/types/ecwid'
import { parseProductCards } from '@/utils/Catalog/parseEcwidProducts'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCategoryStore } from './useCategoryStore'

export const useProductStore = defineStore('product', () => {
  const { fetchProducts } = useProducts()

  const { getCategoryIdBySlug } = useCategoryStore()

  const products = ref<EcwidProduct[]>([])
  const allProducts = ref<EcwidProduct[]>([])
  const currentPageProducts = ref<ProductCardItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function loadProducts(
    currentSlug: string | null | undefined = null,
  ): Promise<EcwidProduct[] | undefined> {
    loading.value = true
    error.value = null
    const categoryId = typeof currentSlug === 'string' ? getCategoryIdBySlug(currentSlug) : null
    try {
      const data = await fetchProducts(categoryId)
      if ('items' in data) {
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
