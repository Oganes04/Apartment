import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema, validateEmail, validatePhone } from '@/utils/validators/common-rules';

// form zod validation schema
export const objectInfoFormSchema = z.object({
  bio: z.string(),
  name: z.string().min(1, { message: messages.objectNameRequired }),
  address: z.string().min(1, { message: messages.objectAddressRequired }),
  location: z.string().min(1, { message: messages.objectLocationRequired }),
  square: z.string().min(1, { message: messages.objectSquareRequired }),
  rooms: z.string().min(1, { message: messages.objectRoomsRequired }),
  beds: z.string().min(1, { message: messages.objectBedsRequired }),
  maxpeople: z.string().min(1, { message: messages.objectMaxPeopleRequired }),
  floor: z.string().min(1, { message: messages.objectFloorRequired }),
  description: z.string().min(1, { message: messages.objectDescriptionRequired }),
  price: z.string().min(1, { message: messages.objectPriceRequired }),
  prepayment: z.string().min(1, { message: messages.objectPrepaymentRequired }),
  minDate: z.string().min(1, { message: messages.objectMinDateRequired }),
  services: z.string().min(1, { message: messages.firstNameRequired }),
});

// generate form types from zod validation schema
export type ObjectInfoFormTypes = z.infer<typeof objectInfoFormSchema>;

export const defaultValues = {

};
