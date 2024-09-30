'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { SubmitHandler, Controller } from 'react-hook-form';
import { PiClock, PiCopySimple, PiEnvelopeSimple, PiMapPin, PiPhone } from 'react-icons/pi';
import { Form } from '@/components/ui/form';
import { Loader, Text, Input, Password, Checkbox, Button } from 'rizzui';
import FormGroup from '@/app/shared/form-group';
import FormFooter from '@/components/form-footer';
import {
  defaultValues,
  objectInfoFormSchema,
  ObjectInfoFormTypes,
} from '@/utils/validators/object-info.schema';
import UploadZone from '@/components/ui/file-upload/upload-zone';
import { Link } from 'react-scroll';

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


export default function ObjectCreateView() {
  const onSubmit: SubmitHandler<ObjectInfoFormTypes> = (data) => {
    toast.success(<Text as="b">Объект успешно добавлен!</Text>);
    console.log('Profile settings data ->', {
      ...data,
    });
  };

  return (
    <Form<ObjectInfoFormTypes>
      validationSchema={objectInfoFormSchema}
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

            
            <div className='flex items-center justify-between'>
              
              <h3 className=" font-bold">ID: 222</h3>

                <div className='flex items-center gap-1'>
                  <Link to='https://apartment/objects/222'> https://apartment/objects/222</Link>
                  <Button
                    style={{width: 'fit-content'}}
                    variant="text"
                    className="group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
                  >
                    <PiCopySimple className="mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary" />
                  </Button>
                  </div>
            </div>

            <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
              <FormGroup
                title="Название"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  placeholder="Вилла на кирова"
                  {...register('name')}
                  error={errors.name?.message}
                  className="flex-grow"
                />
              </FormGroup>

              <FormGroup
                title="Адрес"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiMapPin className="h-6 w-6 text-gray-500" />
                  }
                  type="text"
                  placeholder="ул. Кирова"
                  {...register('address')}
                  error={errors.address?.message}
                />
              </FormGroup>

              <FormGroup
                title="Локация"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiMapPin className="h-6 w-6 text-gray-500" />
                  }
                  type="text"
                  placeholder="44.948237, 34.100327"
                  {...register('location')}
                  error={errors.location?.message}
                />
              </FormGroup>

              <FormGroup
                title="Объект"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  label='Площадь'
                  className="col-span-full"
                  type="text"
                  placeholder="100 м2"
                  {...register('square')}
                  error={errors.square?.message}
                />
                <Input
                  label='Количество комнат'
                  className="col-span-full"
                  type="text"
                  placeholder="3"
                  {...register('rooms')}
                  error={errors.rooms?.message}
                />
                <Input
                  label='Спальных мест'
                  className="col-span-full"
                  type="text"
                  placeholder="3 + 1"
                  {...register('beds')}
                  error={errors.beds?.message}
                />
                <Input
                  label='Максимально мест'
                  className="col-span-full"
                  type="text"
                  placeholder="5"
                  {...register('maxpeople')}
                  error={errors.maxpeople?.message}
                />
                <Input
                  label='Этаж'
                  className="col-span-full"
                  type="text"
                  placeholder="4 из 10"
                  {...register('floor')}
                  error={errors.floor?.message}
                />
              </FormGroup>
              
              <FormGroup
                title="Описание"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  control={control}
                  name="description"
                  
                  render={({ field: { onChange, value } }) => (
                    <QuillEditor
                      value={value}
                      onChange={onChange}
                      className="@3xl:col-span-2 [&>.ql-container_.ql-editor]:min-h-[100px]"
                      labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
                      
                    />
                  )}
                />
              </FormGroup>


              <FormGroup
                title="Удобства"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Checkbox
                label="Телевидение"
                variant="flat"
                className="[&>label>span]:font-medium"
                />
                <Checkbox
                label="Wi-Fi"
                variant="flat"
                className="[&>label>span]:font-medium"
                />
                <Checkbox
                label="Стиральная машина"
                variant="flat"
                className="[&>label>span]:font-medium"
                />
              </FormGroup>


              <FormGroup
                title="Аренда"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  label='Цена'
                  className="col-span-full"
                  type="text"
                  placeholder="10 000"
                  {...register('price')}
                  error={errors.price?.message}
                />
                <Input
                  label='Предоплата'
                  className="col-span-full"
                  type="text"
                  placeholder="50%"
                  {...register('prepayment')}
                  error={errors.prepayment?.message}
                />
                <Input
                  label='Минимальный срок сдачи'
                  className="col-span-full"
                  type="text"
                  placeholder="5"
                  {...register('minDate')}
                  error={errors.minDate?.message}
                />
              </FormGroup>


              <FormGroup
                title="Галерея"
                description="Фотографии вашего объекта"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <div className="flex flex-col gap-6 @container @3xl:col-span-2">
                <UploadZone
                  name="packageInfoAttachment"
                  className="col-span-full"
                  getValues={getValues}
                  setValue={setValue}
                />
                </div>
              </FormGroup>


              <FormGroup
                title="Сервисы"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Checkbox
                label="Авито"
                variant="flat"
                className="[&>label>span]:font-medium"
                />
                <Checkbox
                label="СуточноРу"
                variant="flat"
                className="[&>label>span]:font-medium"
                />
                <Checkbox
                label="Airbnb"
                variant="flat"
                className="[&>label>span]:font-medium"
                />
                <Checkbox
                label="Яндекс.Квартира"
                variant="flat"
                className="[&>label>span]:font-medium"
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
