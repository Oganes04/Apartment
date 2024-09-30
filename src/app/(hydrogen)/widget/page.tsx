'use client';


import { Controller, SubmitHandler } from 'react-hook-form';
import { propertySityFormSchema, PropertySityFormSchema } from '@/utils/validators/property-site.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Button, Select, Text } from 'rizzui';
import { Language } from '@/components/settings/language-types';



export const serversDataList = [
  {
    value: '1',
    label: 'Объект 1',
  },
  {
    value: '2',
    label: 'Объект 2',
  },
  {
    value: '3',
    label: 'Объект 3',
  },
  {
    value: '4',
    label: 'Объект 4',
  },
  
];

export default function NewPage() {

  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  
  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);

  const onSubmit: SubmitHandler<PropertySityFormSchema> = (data) => {
    toast.success(<Text as="b">{translation.downloadToast}</Text>);
  };

  return (
    <>
      <div className="mt-4 mb-10 flex items-center justify-between gap-3 @lg:mt-0">
        <h3 style={{ paddingLeft: '3px' }}>{translation.widgetHeader}</h3>
      </div>
      
      <h4>{translation.widgetCodeHeader}</h4>
      <div className="mx-100 rounded-xl border border-gray-200 bg-white p-5 ">
        <Text className="mb-4">{translation.widgetCodeDescription1}</Text>
        <pre contentEditable="false">
          &lt;script&gt;
            console.log('widget connecting');
          &lt;/script&gt;
        </pre>
      </div>
      <br/>
      <div className="mx-100 rounded-xl border border-gray-200 bg-white p-5 ">
        <Text className="mb-4">{translation.widgetCodeDescription2}</Text>
        <pre contentEditable="false">
          &lt;script&gt;
            console.log('widget connecting');
          &lt;/script&gt;
        </pre>
      </div>
      <br/>
      
      <br/>
      <h4>{translation.widgetCodeHeader2}</h4>
      <div className="mx-100 rounded-xl border border-gray-200 bg-white p-5 ">
        <Text className="mb-4">{translation.widgetCodeDescription1}</Text>
        <pre contentEditable="false">
          &lt;script&gt;
            console.log('widget connecting');
          &lt;/script&gt;
        </pre>
      </div>


    <h3 style={{paddingLeft: '3px'}} className="mt-10 mb-4">{translation.downloadTitle}</h3>

    <Form<PropertySityFormSchema>
      validationSchema={propertySityFormSchema}
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
              name="object"
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
                {translation.downloadButton}
              </Button>
              </div>
          
          );
       }}
      </Form> 
      
    </>
  );
}
