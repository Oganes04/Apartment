'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Tooltip, ActionIcon, Switch } from 'rizzui';
import DeletePopover from '@/app/shared/delete-popover';
import EditCityButton from '@/app/shared/edit-city-button';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'


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
}: Columns) => {
    const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

    useEffect(() => {
      const langFromCookie = (Cookies.get('language') || 'ru') as Language;
      setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
    }, []);
    return [
  {
    title: (
      <HeaderCell
        title={translation.cityName}
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
        title={translation.regionName}
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
    title: <HeaderCell title={translation.cityObjects} />,
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
        <EditCityButton modalBtnLabel={translation.edit} className="w-fit" title={''} id={row.name} region={row.region} />
      


        <DeletePopover
          title={translation.deleteToolTipTitle}
          description={translation.deleteToolTipText + ` ${row.name}?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
};
