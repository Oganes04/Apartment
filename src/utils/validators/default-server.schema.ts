import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const defaultServerFormSchema = z.object({
  server: z.string().optional(),
});

// generate form types from zod validation schema
export type DefaultServerFormTypes = z.infer<typeof defaultServerFormSchema>;

export const defaultValues = {
  server: undefined
};
