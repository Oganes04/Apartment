import { Metadata } from "next";
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import ServerceTable from "./servers-list/table";
import { serviceData } from "@/data/services-data";
import { Button, cn } from "rizzui";
import { PiArrowsClockwiseFill, PiPlus } from "react-icons/pi";
import { serversData } from "@/data/servers-data";
import AddRegionButton from "@/app/shared/add-region-button";
import AddServerButton from "@/app/shared/add-server-button";





// SEO metadata
export const metadata: Metadata = {
  title: "Серверы | StayFlex",
};

const pageHeader = {
  title: "Серверы",
  breadcrumb: [
    {
      href: "/",
      name: "Главная",
    },
    {
      name: "Серверы",
    },
  ],
};

export default function NewPage() {
  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <h3 style={{paddingLeft: '3px'}}>Серверы</h3>
       
          <AddServerButton className="w-fit" title={''} />
        </div>


      <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={serversData}
      fileName="order_data"
      header=""
    >
      <ServerceTable
        data={serversData}
        variant="elegant"
        className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
      />
    </TableLayout>
    </></>
  );
}