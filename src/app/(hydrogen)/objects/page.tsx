import { Metadata } from "next";
import { getWidgetColumns } from './columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddRegionButton from "@/app/shared/add-region-button";
import { objectData } from "@/data/objec-data";
import Link from "next/link";
import { routes } from "@/config/routes";
import { PiListPlusBold } from "react-icons/pi";
import { Button } from "rizzui";




// SEO metadata
export const metadata: Metadata = {
  title: "Объекты | StayFlex",
};

const pageHeader = {
  title: "Объекты",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
    },
    {
      name: "Объекты",
    },
  ],
};

export default function NewPage() {
  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <h3 style={{paddingLeft: '3px'}}>Список объектов</h3>
          <Link href={routes.object.create}>
                <Button
                  className={'w-full @lg:w-auto'}
                >
                  <PiListPlusBold className="me-1.5 h-[17px] w-[17px]" />
                  {'Добавить'}
                </Button>
              </Link>
        </div>


      {/* <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={objectData}
      fileName="order_data"
      header=""
    >
      <ObjectTable
        data={objectData} 
        variant="modern"
        className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
      />
    </TableLayout> */}

    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={objectData}
      fileName="product_data"
      header=""
    >
      <BasicTableWidget
        title=""
        noGutter
        variant="modern"
        data={objectData}
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