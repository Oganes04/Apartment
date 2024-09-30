'use client';
import React, { useRef, useState } from 'react';
import {
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button, Input, Select } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ServersInfoFormTypes, serversInfoFormSchema, defaultValues } from '@/utils/validators/servers-info.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';


import Cookies from 'js-cookie';
import { useEffect } from 'react';
import translations from './add-server-form-language.json';
import { Language } from '@/components/settings/language-types'

 

export default function AddServerForm({
  label = 'Upload Files'}) {
  const { closeModal } = useModal();
  const { control } = useForm();
  // Инициализация состояния для поля IP
  const [ipValue, setIpValue] = useState('');

  // Функция для форматирования IP
  const handleIpChange = (e: { target: { value: any; }; }) => {
    const input = e.target.value;
    // Удаление любых символов, кроме цифр и точек
    let formatted = input.replace(/[^\d.]/g, '');

    // Разбиваем по точке и следим, чтобы каждое число было от 0 до 255
    const parts = formatted.split('.').map((part: string) => {
      let num = parseInt(part, 10);
      if (num > 255) num = 255;
      return isNaN(num) ? '' : num.toString();
    });

    // Ограничиваем количество частей (четыре числа)
    if (parts.length > 4) parts.length = 4;

    formatted = parts.join('.');

    setIpValue(formatted); // Устанавливаем отформатированное значение
  };

  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);

  const onSubmit: SubmitHandler<ServersInfoFormTypes> = (data) => {
    toast.success(<Text as="b">{translation.toast}</Text>);
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

      <Form<ServersInfoFormTypes>
      validationSchema={serversInfoFormSchema}
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
        label={translation.serverName}
        {...register('name')}
        error={errors.name?.message}
      />
       <Input
          placeholder=" "
          label={translation.serverIP}
          value={ipValue}
          {...register('ip')}
          error={errors.ip?.message}
          onChange={handleIpChange}
        />
      <Input
        placeholder=" "
        label={translation.serverLogin}
        {...register('login')}
        error={errors.login?.message}
      />
      <Input
        placeholder=" "
        label={translation.serverPassword}
        {...register('password')}
        error={errors.password?.message}
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

