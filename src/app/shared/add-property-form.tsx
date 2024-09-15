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
import { ActionIcon, Title, Text, Button, Input } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';




export default function AddPropertyForm({
  label = 'Upload Files',
}: {
  label?: string;
  fieldLabel?: string;
  btnLabel?: string;
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

      <FormGroup
      title=""
    >
      <Input
        placeholder=" "
        label = 'Тип недвижимости'
      />
      <Button type="submit" className="w-full @xl:w-auto">
        {'Добавить'}
      </Button>
    </FormGroup>
      
    </div>
  );
}

