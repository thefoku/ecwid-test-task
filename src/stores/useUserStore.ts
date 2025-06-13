import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEmailStore = defineStore('user', () => {
  const email = ref<string>('');
  const emailError = ref<string>('');

  return {
    email,
    emailError,
  };
});
