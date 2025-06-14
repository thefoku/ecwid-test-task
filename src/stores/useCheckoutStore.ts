import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { CartItem } from '@/types/cart';

const CART_STORAGE_KEY = 'ecwid-cart';

const initCartFromStorage = (): Ref<CartItem[]> => {
  const raw = localStorage.getItem(CART_STORAGE_KEY);
  try {
    return ref<CartItem[]>(raw ? JSON.parse(raw) : []);
  } catch (err) {
    console.warn('Error when parsing products from localStorage:', err);
    return ref([]);
  }
};

export const useCheckoutStore = defineStore('cart', () => {
  const items = initCartFromStorage();
  const purchasedItems = ref<CartItem[]>([]);

  function addItem(newItem: CartItem) {
    const existing = items.value.find((item) => item.id === newItem.id);
    if (existing) {
      existing.quantity += newItem.quantity;
      setLocalStorageItems(items);
    } else {
      items.value.push({ ...newItem });
      setLocalStorageItems(items);
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((item) => item.id !== productId);
    setLocalStorageItems(items);
  }

  function clearCart() {
    items.value = [];
    setLocalStorageItems(items);
  }

  function placeOrder() {
    purchasedItems.value = items.value;
    clearCart();
  }

  function setLocalStorageItems(newItems: Ref<CartItem[]>): void {
    items.value = newItems.value;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems.value));
  }

  return {
    items,
    purchasedItems,
    addItem,
    removeItem,
    clearCart,
    initCartFromStorage,
    placeOrder,
  };
});
