'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Tooltip, ActionIcon, Switch } from 'rizzui';
import DeletePopover from '@/app/shared/delete-popover';
import EditCityButton from '../edit-city-button';

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'visible':
      return (
        <div className="flex items-center justify-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark text-center"></Text>
        </div>
      );
    case 'hidden':
      return (
        <div className="flex items-center justify-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark"></Text>
        </div>
      );

  }
}


type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const cityData = [
    {
      id: '1',
      name: 'Респ. Крым',
      items: 83,
      cities: [
        {
          id: '1',
          city: 'Симферополь',
          items: 100,
        },
        {
          id: '2',
          city: 'Севастополь',
          items: 21,
        },
        {
          id: '3',
          city: 'Ялта',
          items: 20,
        },
      ],
    },
  ];
  


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
    render: (name: string) => <Text className="text-sm">{name}</Text>,
  },
  {
    title: (
      <HeaderCell
        title="Регион"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'region'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('region'),
    dataIndex: 'region',
    key: 'region',
    width: 200,
    render: (region: string) => <Text className="text-sm">{region}</Text>,
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
  // {
  //   title: <HeaderCell title="Статус" className='justify-center'/>,
  //   dataIndex: 'status',
  //   key: 'status',
  //   width: 70,
  //   render: (value: string) => getStatusBadge(value),
  // },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 130,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Switch label="" />
        <EditCityButton className="w-fit" title={''} id={row.name} region={row.region} />
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
        content={row.status === 'visible' ? 'Скрыть' : 'Показать'}
        placement="top"
        color="invert"
      >
        <button
          onClick={() => toggleStatus(row.id)
          
          }
          className="p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <EyeIcon className="h-4 w-4" />
        </button>
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
