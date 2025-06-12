import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { CartItem } from '@/types/cart'

const CART_STORAGE_KEY = 'ecwid-cart'

export const useCheckoutStore = defineStore('cart', () => {
  const loadCartFromStorage = (): CartItem[] => {
    if (typeof localStorage === 'undefined') return []
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    try {
      return raw ? JSON.parse(raw) : []
    } catch (err) {
      console.warn('Error when parsing products from localStorage:', err)
      return []
    }
  }

  const items = ref<CartItem[]>(loadCartFromStorage())
  const purchasedItems = ref<CartItem[]>([])

  function addItem(newItem: CartItem) {
    const existing = items.value.find((item) => item.id === newItem.id)
    if (existing) {
      existing.quantity += newItem.quantity
    } else {
      items.value.push({ ...newItem })
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  function clearCart() {
    items.value = []
  }

  const totalQuantity = () => items.value.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = () =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

  function placeOrder() {
    purchasedItems.value = items.value
    clearCart()
  }

  watch(
    items,
    () => {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.value))
    },
    { deep: true },
  )

  return {
    items,
    purchasedItems,
    addItem,
    removeItem,
    clearCart,
    totalQuantity,
    totalPrice,
    loadCartFromStorage,
    placeOrder,
  }
})
