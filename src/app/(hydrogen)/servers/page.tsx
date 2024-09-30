'use client';

import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import ServerceTable from "./servers-list/table";
import { Button, Text, Select } from "rizzui";
import { serversData } from "@/data/servers-data";
import AddServerButton from "@/app/shared/add-server-button";

import { Controller, SubmitHandler } from 'react-hook-form';
import { defaultServerFormSchema, DefaultServerFormTypes } from '@/utils/validators/default-server.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'

export const serversDataList = [
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



const pageHeader = {
  title: "Серверы",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
    },
    {
      name: "Серверы",
    },
  ],
};

export default function NewPage() {
  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);

  const onSubmit: SubmitHandler<DefaultServerFormTypes> = (data) => {
    toast.success(<Text as="b">{translation.toastDefaultServer}</Text>);
  };
  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          <h3 style={{paddingLeft: '3px'}}>{translation.pageTitle}</h3>
       
          <AddServerButton buttonLabel={translation.addButton} modalBtnLabel={translation.AddServerModalTitle} className="w-fit" title={''} />
        </div>


      <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={serversData}
      fileName="order_data"
      header=""
    >
      <ServerceTable
        data={serversData}
        variant="elegant"
        className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
      />
    </TableLayout>

    <h3 style={{paddingLeft: '3px'}} className="mt-10 mb-4">{translation.defaultServer}</h3>
    <Form<DefaultServerFormTypes>
      validationSchema={defaultServerFormSchema}
      // resetValues={reset}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
      }}
    >
       {({ register, control, setValue, getValues, formState: { errors } }) => {
          return (
            <div className='mt-4 mb-4 flex items-center justify-between gap-5 @lg:mt-0' style={{width: '24rem'}}>
             <Controller
            
              name="server"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  options={serversDataList}
                  value={value}
                  onChange={onChange}
                  label=""
                  getOptionValue={(option) => option.label}
                  inPortal={false}
                  placeholder=' '
                />
                )}
              />
              <Button type="submit" className="w-full @xl:w-auto">
                {translation.saveButton}
              </Button>
              </div>
          
          );
       }}
      </Form> 

    
    
    </></>
  );
}