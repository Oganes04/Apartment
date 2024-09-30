import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const citiesInfoFormSchema = z.object({
  city: z.string().min(1, { message: messages.cityNameRequired }),  
  region: z.string().optional(),
  server: z.string().optional(),
});

// generate form types from zod validation schema
export type CitiesInfoFormTypes = z.infer<typeof citiesInfoFormSchema>;

export const defaultValues = {
  city: '',
  region: undefined,
  server: undefined
};
