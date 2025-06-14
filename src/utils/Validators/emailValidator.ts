import { z } from 'zod';
import { useEmailStore } from '@/stores/useEmailStore';

const emailStore = useEmailStore();

export const emailSchema = z.string().email({
  message: 'Enter valid email address',
});

export function validateEmail(): boolean {
  const result = emailSchema.safeParse(emailStore.email);
  emailStore.emailError = result.success ? '' : result.error.errors[0].message;
  return result.success;
}
