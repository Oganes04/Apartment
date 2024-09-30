'use client';

import { getWidgetColumns } from './columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { cityData } from '@/data/city-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddCityButton from "@/app/shared/add-city-button";

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'

const citiesList = cityData.flatMap(data => data.cities.map(city => ({
  id: city.id,
  name: city.city,
  items: city.items,
  region: city.region,
  status: city.status,
})));


const pageHeader = {
  title: "Города",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
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
    <>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          <h3 style={{paddingLeft: '3px'}}>{translation.pageTitle}</h3>
          <AddCityButton className="w-fit" title={''} modalBtnLabel={translation.AddCityModalTitle} buttonLabel={translation.addButton} />
        </div>
       


    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={citiesList}
      fileName="product_data"
      header=""
    >
      <BasicTableWidget
        title=""
        noGutter
        variant="modern"
        data={citiesList}
        // @ts-ignore
        getColumns={getWidgetColumns}
        enableSearch={false}
        enablePagination
        className="min-h-[480px] [&_.widget-card-header_h5]:font-medium"
      />
    </TableLayout>
    </>
  );
}