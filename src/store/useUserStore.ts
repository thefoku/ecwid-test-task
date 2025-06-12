import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const email = ref<string>('')
  const emailError = ref<string>('')

  return {
    email,
    emailError,
  }
})
