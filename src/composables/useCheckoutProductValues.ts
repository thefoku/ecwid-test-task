import { useCheckoutStore } from '@/stores/useCheckoutStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

export function useCheckoutProductValues() {
  const { items } = storeToRefs(useCheckoutStore());
  const totalQuantity = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0));

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
  );
  return {
    totalQuantity,
    totalPrice,
  };
}
