'use client';

import React, { useRef, useState } from 'react';
import {
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button, Input, cn } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';

import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { СonveniencesFormTypes, conveniencesFormSchema, defaultValues } from '@/utils/validators/conveniences.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';

  const onSubmit: SubmitHandler<СonveniencesFormTypes> = (data) => {
    toast.success(<Text as="b">Удобство успешно изменено!</Text>);
  };



export default function EditConveniencesForm({
  label = 'Upload Files',
  id
}: {
  label?: string;
  fieldLabel?: string;
  btnLabel?: string;
  id?:string;
}) {
  const { closeModal } = useModal();

  return (
    <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-lg">
          {label}
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <Form<СonveniencesFormTypes>
      validationSchema={conveniencesFormSchema}
      // resetValues={reset}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
    
      }}
    >
       {({ register, control, setValue, getValues, formState: { errors } }) => {
          return (


      <FormGroup
      title=""
      >
        <label htmlFor="fileInputIcon" style={{cursor: "pointer", padding: '5px 15px', width: "fit-content", borderRadius: "5px", border: "1px solid #ccc"}}>
          Выберите иконку
        <input type="file" id="fileInputIcon" style={{display: "none"}} />
        </label>
       
      <Input
        placeholder=" "
        defaultValue={cn(id)}
        label = 'Удобство'
        {...register('name')}
        error={errors.name?.message}
      />
      <Button type="submit" className="w-full @xl:w-auto">
        {'Сохранить'}
      </Button>
    </FormGroup>
          );
       }}
       </Form>
    </div>
  );
}

