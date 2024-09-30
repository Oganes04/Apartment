'use client';

import React from 'react';
import {
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button, Input } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';
import { SubmitHandler } from 'react-hook-form';
import { PropertyTypeFormTypes, propertyTypeFormSchema, defaultValues } from '@/utils/validators/property-type.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';


import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './property-form-language.json';
import { Language } from '@/components/settings/language-types'





export default function AddPropertyForm({
  label = '',
}: {
  label?: string;
  fieldLabel?: string;
  btnLabel?: string;
}) {
  const { closeModal } = useModal();

  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);

  const onSubmit: SubmitHandler<PropertyTypeFormTypes> = (data) => {
    toast.success(<Text as="b">{translation.addToast}</Text>);
  };

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

      
      <Form<PropertyTypeFormTypes>
      validationSchema={propertyTypeFormSchema}
      // resetValues={reset}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
        defaultValues,
      }}
    >
       {({ register, control, setValue, getValues, formState: { errors } }) => {
          return (

      <FormGroup
      title=""
    >
      <Input
        placeholder=" "
        label = {translation.propertyType}
        {...register('name')}
        error={errors.name?.message}
      />
      <Button type="submit" className="w-full @xl:w-auto">
        {translation.addButton}
      </Button>
    </FormGroup>

          );
       }}
       </Form>
      
    </div>
  );
}

