import { Metadata } from "next";
import { getWidgetColumns } from '@/app/shared/cities-list/city/city-list/columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { cityData } from '@/data/city-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddRegionButton from "@/app/shared/add-region-button";




// SEO metadata
export const metadata: Metadata = {
  title: "Регионы | StayFlex",
};

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
  return (
    <><>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <h3 style={{paddingLeft: '3px'}} >Список регионов</h3>
          <AddRegionButton className="w-fit" title={'Import File'} />
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