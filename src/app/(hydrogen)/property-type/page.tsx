'use client';

import { getWidgetColumns } from './columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { propertyTypeData } from '@/data/property-type-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddPropertyButton from "@/app/shared/add-property-button";


import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'

const pageHeader = {
  title: "Типы недвижимости",
  breadcrumb: [
    {
      href: "/",
      name: "Типы недвижимости",
    },
    {
      name: "Города",
    },
  ],
};

export default function NewPage() {

  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);
  return (
    <><>
    <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
        <h3 style={{paddingLeft: '3px'}}>{translation.pageTitle}</h3>
        <AddPropertyButton className="w-fit" title={''} modalBtnLabel={translation.AddPropertyModalTitle} buttonLabel={translation.addButton} />
      </div>


    <TableLayout
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
        data={propertyTypeData}
        fileName="product_data"
        header=""
      >
        <BasicTableWidget
          title=""
          noGutter
          variant="modern"
          data={propertyTypeData}
          // @ts-ignore
          getColumns={getWidgetColumns}
          enableSearch={false}
          enablePagination
          className="min-h-[480px] [&_.widget-card-header_h5]:font-medium"
        />
      </TableLayout>
    </></>
  );
}