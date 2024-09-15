'use client';

import { getWidgetColumns } from '@/app/(hydrogen)/objects/columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddRegionButton from "@/app/shared/add-region-button";
import { objectData } from "@/data/objec-data";


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


const pageHeader = {
    title: "Объекты",
    breadcrumb: [
      {
        href: "/",
        name: "Главная",
      },
      {
        name: "Объекты",
      },
    ],
  };

export default function UserObjectsInfoView() {
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

            <h3 className=" font-bold">Объекты</h3>

            <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">



            <TableLayout
                title={''}
                breadcrumb={pageHeader.breadcrumb}
                data={objectData}
                fileName="product_data"
                header=""
                >
                <BasicTableWidget
                    title=""
                    noGutter
                    variant="modern"
                    data={objectData}
                    // @ts-ignore
                    getColumns={getWidgetColumns}
                    enableSearch={false}
                    enablePagination
                    className="min-h-[480px] [&_.widget-card-header_h5]:font-medium"
                />
                </TableLayout>
            

              

           
             
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
