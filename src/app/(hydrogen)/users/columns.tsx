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

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};


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
        title="Объектов"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'items'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('items'),
    dataIndex: 'items',
    key: 'items',
    width: 200,
  
    render: (_: any, row: any) => (
      <Text>{row.items}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Подписка"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'subscribtion'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('subscribtion'),
    dataIndex: 'subscribtion',
    key: 'subscribtion',
    width: 200,
  
    render: (_: any, row: any) => (
      <Text>{row.subscribtion}</Text>
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
            
            <Switch label="" />
            <EditSubscribtionButton className="w-fit" title={''} id={row.subscribtion} />
        
            
            <Tooltip
              size="sm"
              content={'Редактировать'}
              placement="top"
              color="invert"
            >
              <Link href={routes.users.edit(row.id)}>
                <ActionIcon
                  as="span"
                  size="sm"
                  variant="outline"
                  className="hover:!border-gray-900 hover:text-gray-700"
                >
                  <PencilIcon className="h-4 w-4" />
                </ActionIcon>
              </Link>
            </Tooltip>
            {/* <Tooltip
              size="sm"
              content={'Показать / Скрыть'}
              placement="top"
              color="invert"
            >
              <Link href={routes.invoice.details(row.id)}>
                <ActionIcon
                  as="span"
                  size="sm"
                  variant="outline"
                  className="hover:!border-gray-900 hover:text-gray-700"
                >
                  <EyeIcon className="h-4 w-4" />
                </ActionIcon>
              </Link>
            </Tooltip> */}

            
            

        <DeletePopover
          title={`Удалить`}
          description={`Вы уверены, что хотите удалить ${row.name}?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
      


    ),
  },
];


function openModal(arg0: { view: import("react").JSX.Element; customSize: string; }): void {
  throw new Error('Function not implemented.');
}

