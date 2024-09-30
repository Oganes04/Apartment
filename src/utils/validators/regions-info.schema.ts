import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const regionsInfoFormSchema = z.object({
  region: z.string().min(1, { message: messages.regionNameRequired }),
  server: z.string().optional(),
});

// generate form types from zod validation schema
export type RegionsInfoFormTypes = z.infer<typeof regionsInfoFormSchema>;

export const defaultValues = {
  region: '',
  server: undefined
};
