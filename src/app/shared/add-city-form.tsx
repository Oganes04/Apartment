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

export const RegionList = [
    {
      value: '82',
      label: 'Республика Крым',
    },
    {
      value: '92',
      label: 'Севастополь',
    },
    {
      value: '77',
      label: 'Москва',
    },
    {
      value: '95',
      label: 'Чеченская республика',
    },
    
  ];


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


  

export default function AddCityForm({
  label = 'Upload Files'}) {
  const { closeModal } = useModal();
  const { control } = useForm();

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
        label='Название города'
      />
      <Controller
        name="region"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            options={RegionList}
            value={value}
            onChange={onChange}
            label="Выберите регион"
            getOptionValue={(option) => option.label}
            inPortal={false}
            placeholder=' '
          />
        )}
      />
       <Controller
        name="servers"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            options={serversData}
            value={value}
            onChange={onChange}
            label="Выберите сервер"
            getOptionValue={(option) => option.label}
            inPortal={false}
            placeholder=' '
          />
        )}
      />
      <Button type="submit" className="w-full @xl:w-auto">
        {'Добавить'}
      </Button>
    </FormGroup>
      
    </div>
  );
}

