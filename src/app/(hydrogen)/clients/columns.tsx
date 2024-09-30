'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Tooltip, ActionIcon, Input, Button, Switch, cn, Select } from 'rizzui';
import { Img } from '@react-email/img';

import Link from 'next/link';

import { routes } from '@/config/routes';
import { PiInfo } from 'react-icons/pi';

import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { ClientStatusFormTypes, clientStatusFormSchema, defaultValues } from '@/utils/validators/client-status.schema';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';

  const onSubmit: SubmitHandler<ClientStatusFormTypes> = (data) => {
    toast.success(<Text as="b">Клиент успешно обновлен!</Text>);
  };
type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};


const statusOptions = [
  {
    value: '1',
    label: '★',
  },
  {
    value: '2',
    label: '★★',
  },
  {
    value: '3',
    label: '★★★',
  },
  {
    value: '4',
    label: '★★★★',
  },
  {
    value: '5',
    label: '★★★★★',
  },
];



export const getUserColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: (
      <HeaderCell
        title="Имя"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'name'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('name'),
    dataIndex: 'name',
    key: 'name',
    width: 200,
  
    render: (_: any, row: any) => (
      
      <>
      {row.icon ? (
        <>
            <div className='flex items-center'>
            <Img src={row.icon} style={{ width: '32px'}} />
            <Text>{row.name}</Text>
              
            </div>
            </>
      ) : (

      <Text>{row.name}</Text>
        
      )}
    </>
    ),
  },

  {
    title: (
      <HeaderCell
        title="Номер"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'phone'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('phone'),
    dataIndex: 'phone',
    key: 'phone',
    width: 200,
  
    render: (_: any, row: any) => (
      <Text>{row.phone}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Email"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'email'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('email'),
    dataIndex: 'email',
    key: 'email',
    width: 200,
  
    render: (_: any, row: any) => (
      <Text>{row.email}</Text>
    ),
  },
  {
    
    title: <HeaderCell title="Оценка" />,
    dataIndex: 'status',
    key: 'status',
    width: 150,
    render: (value: string) => (
      // <StatusField
      //         dropdownClassName="!z-10"
      //         className="w-full min-w-[80px] @[35rem]:w-auto"
      //         placeholder="Оценка"
      //         options={statusOptions}
      //         getOptionValue={(option: { value: any }) => option.value}
      //         displayValue={(selected: string) =>
      //           statusOptions.find(
      //             (option) => option.label === selected
      //           )?.label ?? ''
      //         }
      //         placement="bottom-start"
         
      //       />
      <Form<ClientStatusFormTypes>
      validationSchema={clientStatusFormSchema}
      // resetValues={reset}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
      }}
    >
       {({ register, control, setValue, getValues, formState: { errors } }) => {
          return (
            <Controller
            name="status"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                options={statusOptions}
                value={value}
                onChange={onChange}
                label=""
                getOptionValue={(option) => option.label}
                inPortal={true}
                placeholder=' '
                
              />
            )}
          />
          );
       }}
       </Form>
    ),
  },

  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 130,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
            <Link href={routes.userReservations}>

<Button
style={{width: '28px', height: '28px', backgroundColor: 'transparent', padding: '0'}}
className={cn('w-full @lg:w-auto hover:!border-gray-900 hover:text-gray-700 border-muted')}
>

<PiInfo className="h-4 w-4 hover:text-gray-700 text-gray-500" style={{minWidth: '16px'}} />
</Button>
</Link>
        

        
      </div>
      


    ),
  },

];





