import { Text, Input, cn, Button } from 'rizzui';
import { SubmitHandler } from 'react-hook-form';
import { ServersInfoFormTypes, serversInfoFormSchema, defaultValues } from '@/utils/validators/servers.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './../language.json';
import { Language } from '@/components/settings/language-types'


  

export default function ExpandedOrderRow({ record }: any) {
  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);

  const onSubmit: SubmitHandler<ServersInfoFormTypes> = (data) => {
    toast.success(<Text as="b">{translation.toast}</Text>);
  };


  if (record?.cities?.length === 0) {
    return <Text>{translation.emptyTable}</Text>;
  }

  return (
    <div className="">
        <Form<ServersInfoFormTypes>
      validationSchema={serversInfoFormSchema}
      // resetValues={reset}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
      }}
    >
       {({ register, control, setValue, getValues, formState: { errors } }) => {
          return (
    
        <><div className='flex items-start gap-20'>
              <Input placeholder='Название' defaultValue={record.name} label={translation.serverName}
                {...register('name')}
                error={errors.name?.message}
              ></Input>
              <Input placeholder='IP' defaultValue={record.ip} label={translation.serverIP}
              {...register('ip')}
              error={errors.ip?.message}
              ></Input>
              <Input placeholder='Логин' type='text' defaultValue={record.login} label={translation.serverLogin}
              {...register('login')}
              error={errors.login?.message}
              ></Input>
              <Input placeholder='Пароль' defaultValue={record.password} type='text' label={translation.serverPassword}
              {...register('password')}
              error={errors.password?.message}
              ></Input>

            </div><div className='flex items-center justify-end mt-5'>
                <Button type='submit' className={cn('w-fit @lg:w-auto')}>{translation.saveButton}</Button>
              </div></>
          );
       }}
</Form>
    </div>
    
  );
}
