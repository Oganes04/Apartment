import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema, validateEmail, validatePhone } from '@/utils/validators/common-rules';

// form zod validation schema
export const personalInfoFormSchema = z.object({
  first_name: z.string().min(1, { message: messages.firstNameRequired }),
  email: validateEmail,
  role: z.string().optional(),
  phone: validatePhone,
  subscribtion:  z.string(),
  newPassword:  z.string(),
});

// generate form types from zod validation schema
export type PersonalInfoFormTypes = z.infer<typeof personalInfoFormSchema>;

export const defaultValues = {
  first_name: '',
  email: '',
  role: undefined,
  phone: '',
  subscribtion: '',
  newPassword: ''
};
