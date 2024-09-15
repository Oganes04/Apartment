import { Metadata } from "next";
import { getWidgetColumns } from './column';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { conveniencesData } from '@/data/conveniences-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddConveniencesButton from "@/app/shared/add-conveniences-button";


// SEO metadata
export const metadata: Metadata = {
  title: "Удобства | StayFlex",
};

const pageHeader = {
  title: "Удобства",
  breadcrumb: [
    {
      href: "/",
      name: "Удобства",
    },
    {
      name: "Города",
    },
  ],
};

export default function NewPage() {
  return (
    <><>
    <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
        {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
        <h3 style={{paddingLeft: '3px'}}>Удобства</h3>
        <AddConveniencesButton className="w-fit" title={'Import File'} />
      </div>

      

    <TableLayout
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
        data={conveniencesData}
        fileName="product_data"
        header=""
      >
        <BasicTableWidget
          title=""
          noGutter
          variant="modern"
          data={conveniencesData}
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