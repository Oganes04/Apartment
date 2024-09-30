
'use client';

import { getUserColumns } from './columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { userData } from '@/data/user-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import { Button } from "rizzui";
import Link from "next/link";
import { routes } from "@/config/routes";
import { PiListPlusBold } from "react-icons/pi";


import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'






const pageHeader = {
  title: "Пользователи",
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

  const langFromCookie1 = Cookies.get('language');
  console.log('Language from cookie:', langFromCookie1);

  const [translation, setTranslation] = useState(translations['ru']);  // По умолчанию 'ru'

  
  useEffect(() => {
    const langFromCookie = (Cookies.get('language') || 'ru') as Language;
    setTranslation(translations[langFromCookie]);  // Устанавливаем переводы на основе языка из куки
  }, []);


  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">

          <h3 style={{paddingLeft: '3px'}} >{translation.pageTitle}</h3>
    
              <Link href={routes.users.create}>
                <Button
                  className={'w-full @lg:w-auto'}
                >
                  <PiListPlusBold className="me-1.5 h-[17px] w-[17px]" />
                  {translation.addButton}
                </Button>
              </Link>
          
        </div>

      


      <TableLayout
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
        data={userData}
        fileName="product_data"
        header=""
        
      >
        <BasicTableWidget
        
          title=""
          noGutter
          variant="modern"
          data={userData}
          // @ts-ignore
          getColumns={getUserColumns}
          enableSearch={false}
          enablePagination
          className="min-h-[480px] [&_.widget-card-header_h5]:font-medium"
        />
      </TableLayout>
    </></>
  );
}