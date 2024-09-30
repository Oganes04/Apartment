import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const conveniencesFormSchema = z.object({
  name: z.string().min(1, { message: messages.conveniencesNameRequired }),  
});

// generate form types from zod validation schema
export type СonveniencesFormTypes = z.infer<typeof conveniencesFormSchema>;

export const defaultValues = {
  name: '',
};
