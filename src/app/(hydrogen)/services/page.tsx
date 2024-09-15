import { Metadata } from "next";
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import ServiceTable from "./services-list/table";
import { serviceData } from "@/data/services-data";
import { Button, cn } from "rizzui";
import { PiArrowsClockwiseFill } from "react-icons/pi";





// SEO metadata
export const metadata: Metadata = {
  title: "Сервисы | StayFlex",
};

const pageHeader = {
  title: "Сервисы",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
    },
    {
      name: "Сервисы",
    },
  ],
};

export default function NewPage() {
  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <h3 style={{paddingLeft: '3px'}}>Сервисы</h3>
       
          <Button className={'w-fit @lg:w-auto d-flex items-center gap-2'}
         
          >
            <PiArrowsClockwiseFill className="text-xl sync-btn"/>
            {'Синхронизировать'}
          </Button>
        </div>


      <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={serviceData}
      fileName="order_data"
      header=""
    >
      <ServiceTable
        data={serviceData}
        variant="elegant"
        className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
      />
    </TableLayout>
    </></>
  );
}