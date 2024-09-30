import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const propertyTypeFormSchema = z.object({
  name: z.string().min(1, { message: messages.propertyNameRequired }),  
});

// generate form types from zod validation schema
export type PropertyTypeFormTypes = z.infer<typeof propertyTypeFormSchema>;

export const defaultValues = {
    name: '',
};
