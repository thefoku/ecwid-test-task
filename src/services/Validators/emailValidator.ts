import { z } from 'zod'
import { useUserStore } from '@/store/useUserStore'

const userStore = useUserStore()

export const emailSchema = z.string().email({
  message: 'Enter valid email address',
})

export function validateEmail(): boolean {
  const result = emailSchema.safeParse(userStore.email)
  userStore.emailError = result.success ? '' : result.error.errors[0].message
  return result.success
}
