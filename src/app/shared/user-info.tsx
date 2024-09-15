'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { SubmitHandler, Controller } from 'react-hook-form';
import { PiClock, PiEnvelopeSimple, PiPhone } from 'react-icons/pi';
import { Form } from '@/components/ui/form';
import { Loader, Text, Input, Password } from 'rizzui';
import FormGroup from '@/app/shared/form-group';
import FormFooter from '@/components/form-footer';
import {
  defaultValues,
  personalInfoFormSchema,
  PersonalInfoFormTypes,
} from '@/utils/validators/personal-info.schema';
import UploadZone from '@/components/ui/file-upload/upload-zone';
import { countries, roles, timezones } from '@/data/forms/my-details';
import AvatarUpload from '@/components/ui/file-upload/avatar-upload';
import { DatePicker } from '@/components/ui/datepicker';
import PasswordSettingsView from './account-settings/password-settings';

const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => (
    <div className="grid h-10 place-content-center">
      <Loader variant="spinner" />
    </div>
  ),
});

const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
});

export const tariffData = [
  {
    value: '1',
    label: 'Бронза',
  },
  {
    value: '2',
    label: 'Серебро',
  },
  {
    value: '3',
    label: 'Золото',
  },
  {
    value: '4',
    label: 'Платина',
  },
  
];


export default function UserInfoView() {
  const onSubmit: SubmitHandler<PersonalInfoFormTypes> = (data) => {
    toast.success(<Text as="b">Successfully added!</Text>);
    console.log('Profile settings data ->', {
      ...data,
    });
  };

  return (
    <Form<PersonalInfoFormTypes>
      validationSchema={personalInfoFormSchema}
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
          <>
            <FormGroup
              title=""
            //   description="Update your photo and personal details here"
              className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
            />

            <h3 className=" font-bold">Личная информация</h3>

            <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
              <FormGroup
                title="ФИО"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  placeholder="Иванов И. И."
                  {...register('first_name')}
                  error={errors.first_name?.message}
                  className="flex-grow"
                />
                {/* <Input
                  placeholder="Last Name"
                  {...register('last_name')}
                  error={errors.last_name?.message}
                  className="flex-grow"
                /> */}
              </FormGroup>

              <FormGroup
                title="Email"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="email"
                  placeholder="your@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </FormGroup>

              <FormGroup
                title="Номер телефона"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiPhone className="h-6 w-6 text-gray-500" />
                  }
                  type="tel"
                  placeholder="+7 (777) 777-77-77"
                />
              </FormGroup>
{/* 
              <FormGroup
                title="Логотип"
                description="Вы можете разместить ваш логотип"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <div className="flex flex-col gap-6 @container @3xl:col-span-2">
                  <AvatarUpload
                    name="avatar"
                    setValue={setValue}
                    getValues={getValues}
                    error={errors?.avatar?.message as string}
                  />
                </div>
              </FormGroup> */}

              <FormGroup
                title="Тариф"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  control={control}
                  name="role"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      dropdownClassName="!z-10"
                      inPortal={false}
                      placeholder="Выберите тариф"
                      options={tariffData}
                      onChange={onChange}
                      value={value}
                      className="col-span-full"
                      getOptionValue={(option) => option.value}
                      displayValue={(selected) =>
                        tariffData?.find((r) => r.value === selected)?.label ?? ''
                      }
                      error={errors?.role?.message as string}
                    />
                  )}
                />
              </FormGroup>
{/* 
              <FormGroup
                title="Действителен до:"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Text> <strong>12.12.2024</strong></Text>
              </FormGroup> */}
              <FormGroup
                title="Продлить до:"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  name="subscribtion"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      inputProps={{
                          label: '',
                      }}
                      value={value}
                      placeholderText={'Продлить'}
                      selected={new Date(2024, 8, 6)}
                      onChange={onChange}
                    />
                  )}
                  />
              </FormGroup>

            
              <FormGroup
                title="Новый пароль"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >   
                <Controller
                  control={control}
                  name="newPassword"
                  render={({ field: { onChange, value } }) => (
                    <Password
                      placeholder="Введите пароль"
                      helperText={
                        getValues().newPassword.length < 8 &&
                        'Новый пароль должен быть длиннее 8 символов'
                      }
                      onChange={onChange}
                      error={errors.newPassword?.message}
                    />
                  )}
                />
              </FormGroup>
              

           
             
            </div>

            <FormFooter
              // isLoading={isLoading}
              altBtnText="Отменить"
              submitBtnText="Сохранить"
            />
          </>
        );
      }}
    </Form>
  );
}
