import { z } from 'zod';
import { useEmailStore } from '@/stores/useUserStore';

const userStore = useEmailStore();

export const emailSchema = z.string().email({
  message: 'Enter valid email address',
});

export function validateEmail(): boolean {
  const result = emailSchema.safeParse(userStore.email);
  userStore.emailError = result.success ? '' : result.error.errors[0].message;
  return result.success;
}
