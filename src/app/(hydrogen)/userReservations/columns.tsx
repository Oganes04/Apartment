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
import { PiCalendarPlus } from 'react-icons/pi';
import EditSubscribtionButton from '@/app/shared/edit-subscribtion-button';
import InfoReservationButton from '@/app/shared/info-reservation-button';
import StatusField from '@/components/controlled-table/status-field';
// import { statusOptions } from '@/app/shared/invoice/form-utils';
import { appointmentTypesOptions } from '@/app/shared/appointment/appointment-list/list';

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};


const statusOptions = [
  {
    value: 'approved',
    label: 'Одобрено',
  },
  {
    value: 'processing',
    label: 'В обработке',
  },
  {
    value: 'new',
    label: 'Новая',
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
            title="Объект"
            sortable
            ascending={
              sortConfig?.direction === 'asc' && sortConfig?.key === 'object'
            }
          />
        ),
        onHeaderCell: () => onHeaderCellClick('object'),
        dataIndex: 'object',
        key: 'object',
        width: 150,
      
        render: (_: any, row: any) => (
          <Text>{row.object}</Text>
        ),
      },
      {
        title: (
          <HeaderCell
            title="Дата"
            sortable
            ascending={
              sortConfig?.direction === 'asc' && sortConfig?.key === 'date'
            }
          />
        ),
        onHeaderCell: () => onHeaderCellClick('date'),
        dataIndex: 'date',
        key: 'date',
        width: 200,
      
        render: (_: any, row: any) => (
          <Text>{row.date}</Text>
        ),
      },
 

      {
        title: (
          <HeaderCell
            title="Статус"
            sortable
            ascending={
              sortConfig?.direction === 'asc' && sortConfig?.key === 'status'
            }
          />
        ),
        onHeaderCell: () => onHeaderCellClick('status'),
        dataIndex: 'status',
        key: 'status',
        width: 200,
      
        render: (_: any, row: any) => (
          <Text>{row.status}</Text>
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
            
           
            <InfoReservationButton
             className="w-fit" title={''}
             id={row.subscribtion}
             object={row.object}
             date={row.date}
             name={row.name}
             phone={row.phone}
             email={row.email}
             />

        
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

