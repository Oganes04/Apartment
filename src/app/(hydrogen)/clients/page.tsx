import { Metadata } from "next";
import { getUserColumns } from './columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { clientData } from '@/data/client-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddRegionButton from "@/app/shared/add-region-button";
import { ActionIcon, Button, Tooltip, cn } from "rizzui";
import Link from "next/link";
import { routes } from "@/config/routes";
import { PiListPlusBold } from "react-icons/pi";





// SEO metadata
export const metadata: Metadata = {
  title: "Клиенты | StayFlex",
};

const pageHeader = {
  title: "Клиенты",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
    },
    {
      name: "Клиенты",
    },
  ],
};

export default function NewPage() {
  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <h3 style={{paddingLeft: '3px'}} >Список клиентов</h3>      
        </div>

      


      <TableLayout
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
        data={clientData}
        fileName="product_data"
        header=""
        
      >
        <BasicTableWidget
        
          title=""
          noGutter
          variant="modern"
          data={clientData}
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