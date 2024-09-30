'use client';


import { HeaderCell } from '@/components/ui/table';
import { Text, Switch } from 'rizzui';
import DeletePopover from '@/app/shared/delete-popover';
import { Img } from '@react-email/img';
import EditPropertyButton from '@/app/shared/edit-property-button';

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
        title={translation.nameColumn}
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
    title: <HeaderCell title={translation.objectsColumn} />,
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
            <EditPropertyButton modalBtnLabel={translation.edit} className="w-fit" title={''} id={row.name} />
            
            

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

