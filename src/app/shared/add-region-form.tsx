'use client';

import React from 'react';
import {
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button, Input, Select } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { RegionsInfoFormTypes, regionsInfoFormSchema, defaultValues } from '@/utils/validators/regions-info.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './region-form-language.json';
import { Language } from '@/components/settings/language-types'



export const serversData = [
  {
    value: '192.128.0.1',
    label: 'Сервер-1',
  },
  {
    value: '192.128.2.1',
    label: 'Сервер-2',
  },
  {
    value: '192.128.3.1',
    label: 'Сервер-3',
  },
  {
    value: '192.128.4.1',
    label: 'Сервер-4',
  },
  
];


export default function AddRegionForm({
  accept = '',
  label = 'Upload Files',
  
}: {
  label?: string;
  accept?: string;
  multiple?: boolean;
  btnLabel?: string;
}) {
  const { closeModal } = useModal();

  
  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);


  const onSubmit: SubmitHandler<RegionsInfoFormTypes> = (data) => {
    toast.success(<Text as="b">{translation.toastAdd}</Text>);
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

      <Form<RegionsInfoFormTypes>
      validationSchema={regionsInfoFormSchema}
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
        label = {translation.regionName}
        {...register('region')}
        error={errors.region?.message}
      />

      <Controller
        name="server"
        control={control}
        defaultValue={serversData[0].label}
        render={({ field: { onChange, value } }) => (
          <Select
            options={serversData}
            value={value}
            onChange={onChange}
            label={translation.defaultServer}
            getOptionValue={(option) => option.label}
            inPortal={false}
            placeholder=' '
            
          />
        )}
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

