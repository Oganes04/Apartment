'use client';

import { z } from 'zod';
import { useAtom } from 'jotai';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  ActionIcon,
  AdvancedRadio,
  RadioGroup,
  Text,
  Title,
  FieldError,
} from 'rizzui';
import Footer from './footer';
import ScheduleLightIcon from '@/components/icons/schedule-light';
import Calendar from 'react-calendar';
import {
  formDataAtom,
  useStepperAppointment,
} from '@/app/shared/appointment/appointment-list/appointment-form';
import { PiXBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import SimpleBar from 'simplebar-react';
import cn from '@/utils/class-names';

export const appointmentDataSchema = z.object({
  date: z.date().refine((value) => value !== null, 'Please select a date'),
  time: z.string().min(1, 'Time is required'),
});


// generate form types from zod validation schema

const FormSchema = appointmentDataSchema;

type FormSchemaType = z.infer<typeof FormSchema>;

export default function DateTime() {
  const { gotoNextStep } = useStepperAppointment();
  const [formData, setFormData] = useAtom(formDataAtom);
  const { closeModal } = useModal();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: formData.date,
      time: formData.time,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log('data', data);
    setFormData((prev) => ({
      ...prev,
      date: data.date,
      time: data.time,
    }));
    gotoNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      {/* <ActionIcon
        size="sm"
        variant="text"
        onClick={() => closeModal()}
        className="absolute end-3.5 top-3.5 p-0 text-gray-500 hover:!text-gray-900 md:end-7 md:top-7"
      >
        <PiXBold className="h-5 w-5" />
      </ActionIcon> */}
 
      <div className="px-5 pb-5 md:px-7 md:pb-7">
        <div className="flex flex-col rounded-lg border border-gray-300 md:flex-row">
          <Controller
            control={control}
            name="date"
            render={({ field: { value, onChange } }) => (
              <Calendar
                onChange={onChange}
                value={value}
                prev2Label={false}
                next2Label={false}
                className="!w-full !border-0 !bg-transparent px-4 pb-4 pt-2.5 !font-inter !text-base md:px-5 md:pb-5"
              />
            )}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </form>
  );
}
