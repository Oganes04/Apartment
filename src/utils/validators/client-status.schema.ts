import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const clientStatusFormSchema = z.object({
  status: z.string(),
});

// generate form types from zod validation schema
export type ClientStatusFormTypes = z.infer<typeof clientStatusFormSchema>;

export const defaultValues = {
  status: undefined,
};
