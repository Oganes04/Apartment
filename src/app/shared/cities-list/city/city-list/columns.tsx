'use client';


import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Tooltip, ActionIcon, Input, Button, Switch } from 'rizzui';
import DeletePopover from '@/app/shared/delete-popover';
import { Img } from '@react-email/img';
import EditRegionButton from '@/app/shared/edit-region-button';



type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};


export const getWidgetColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: (
      <HeaderCell
        title="Название"
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
    title: <HeaderCell title="Объектов" />,
    dataIndex: 'items',
    key: 'items',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
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
            <EditRegionButton className="w-fit" title={''} id={row.name} />
            
            {/* <Tooltip
              size="sm"
              content={'Редактировать'}
              placement="top"
              color="invert"
            >
              <Link href={routes.invoice.edit(row.id)}>
                <ActionIcon
                  as="span"
                  size="sm"
                  variant="outline"
                  className="hover:!border-gray-900 hover:text-gray-700"
                >
                  <PencilIcon className="h-4 w-4" />
                </ActionIcon>
              </Link>
            </Tooltip> */}
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


