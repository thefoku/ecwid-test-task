import type { Ref } from 'vue';

export const DEFAULT_ADD_TO_BAG_TEXT = 'Add to Bag';

export const showCheckmarkOnClick = (text: Ref<string>) => {
  text.value = '✓';
  setTimeout(() => {
    text.value = 'Add to Bag';
  }, 1000);
};
