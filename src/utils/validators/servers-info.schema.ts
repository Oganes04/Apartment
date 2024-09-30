import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const serversInfoFormSchema = z.object({
  name: z.string().min(1, { message: messages.servesrNameRequired }),
  ip: z.string().min(4, { message: messages.servesrIpRequired }),
  login: z.string().min(1, { message: messages.servesrLoginRequired }),
  password: z.string().min(1, { message: messages.servesrPassRequired }),
});

// generate form types from zod validation schema
export type ServersInfoFormTypes = z.infer<typeof serversInfoFormSchema>;

export const defaultValues = {
  name: '',
  ip: '',
  login: '',
  password: '',
};
