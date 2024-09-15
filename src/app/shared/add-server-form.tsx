'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  PiArrowLineDownBold,
  PiFile,
  PiFileCsv,
  PiFileDoc,
  PiFilePdf,
  PiFileXls,
  PiFileZip,
  PiTrashBold,
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button, Input, Select } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';
import { Controller, useForm } from 'react-hook-form';

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

      <FormGroup
      title=""
    >
      <Input
        placeholder=" "
        label='Название'
      />
       <Input
          placeholder=" "
          label="IP"
          value={ipValue}
          onChange={handleIpChange}
        />
      <Input
        placeholder=" "
        label='Логин'
      />
      <Input
        placeholder=" "
        label='Пароль'
      />

      <Button type="submit" className="w-full @xl:w-auto">
        {'Добавить'}
      </Button>
    </FormGroup>
      
    </div>
  );
}

