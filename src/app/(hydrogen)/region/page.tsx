'use client';
import { getWidgetColumns } from './column';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { cityData } from '@/data/city-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddRegionButton from "@/app/shared/add-region-button";

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'


const pageHeader = {
  title: "Регионы",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
    },
    {
      name: "Регионы",
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
          <h3 style={{paddingLeft: '3px'}} >{translation.pageTitle}</h3>
          <AddRegionButton className="w-fit" title={''} buttonLabel={translation.addButton} modalBtnLabel={translation.AddRegionModalTitle} />
        </div>

      <TableLayout
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
        data={cityData}
        fileName="product_data"
        header=""
      >
        <BasicTableWidget
          title=""
          noGutter
          variant="modern"
          data={cityData}
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