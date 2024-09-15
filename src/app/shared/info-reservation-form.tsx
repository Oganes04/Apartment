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
import { ActionIcon, Title, Text, Button, Input, cn, Select } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';
import { Controller, useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import { DatePicker } from '@/components/ui/datepicker';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';

type AcceptedFiles = 'img' | 'pdf' | 'csv' | 'imgAndPdf' | 'all';


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




export default function InfoReservationForm({
  label = 'Upload Files',
  btnLabel = 'Upload',
  fieldLabel,
  multiple = true,
  accept = 'all',
  id,
  object,
  date,
  phone,
  name,
  email,
}: {
  label?: string;
  fieldLabel?: string;
  btnLabel?: string;
  multiple?: boolean;
  accept?: AcceptedFiles;
  id: string;
  object: string;
  date: string;
  phone: string;
  name: string;
  email: string;
}) {

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
       <Text><strong style={{width: "100px", display:'inline-block'}}>Объект: </strong>{object}</Text>
       <Text><strong style={{width: "100px", display:'inline-block'}}>Имя: </strong>{name}</Text>
       <Text><strong style={{width: "100px", display:'inline-block'}}>Номер: </strong>{phone}</Text>
       <Text><strong style={{width: "100px", display:'inline-block'}}>Email: </strong>{email}</Text>
       <Text><strong style={{width: "100px", display:'inline-block'}}>Дата: </strong>{date}</Text>
    </FormGroup>
      
    </div>
  );
}

