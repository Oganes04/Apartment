'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Tooltip, ActionIcon, Input, Button, Switch, cn } from 'rizzui';
import DeletePopover from '@/app/shared/delete-popover';
import { Img } from '@react-email/img';
import EditRegionButton from '@/app/shared/edit-region-button';
import Link from 'next/link';
import PencilIcon from '@/components/icons/pencil';
import { routes } from '@/config/routes';
import EditRegionForm from '@/app/shared/edit-region-form';
import { PiCalendarPlus, PiInfo } from 'react-icons/pi';
import EditSubscribtionButton from '@/app/shared/edit-subscribtion-button';
import StatusField from '@/components/controlled-table/status-field';
import { appointmentTypesOptions } from '@/app/shared/appointment/appointment-list/list';
import InfoReservationButton from '@/app/shared/info-reservation-button';
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
      <StatusField
              dropdownClassName="!z-10"
              className="w-full min-w-[80px] @[35rem]:w-auto"
              placeholder="Оценка"
              options={statusOptions}
              // value={filters['type']}
              onChange={(value: string) => {
                updateFilter('type', value);
              }}
              getOptionValue={(option: { value: any }) => option.value}
              displayValue={(selected: string) =>
                appointmentTypesOptions.find(
                  (option) => option.label === selected
                )?.label ?? ''
              }
              placement="bottom-start"
              // {...(isMediumScreen && {
              //   label: 'Service Type',
              //   labelClassName: 'font-medium text-gray-700',
              // })}
            />
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


function openModal(arg0: { view: import("react").JSX.Element; customSize: string; }): void {
  throw new Error('Function not implemented.');
}


function updateFilter(arg0: string, value: string) {
  throw new Error('Function not implemented.');
}