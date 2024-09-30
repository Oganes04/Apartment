import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const propertySityFormSchema = z.object({
    object: z.string().optional(),
});

// generate form types from zod validation schema
export type PropertySityFormSchema = z.infer<typeof propertySityFormSchema>;

export const defaultValues = {
  object: undefined
};
