import { Metadata } from "next";
import { getWidgetColumns } from './columns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { propertyTypeData } from '@/data/property-type-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import AddPropertyButton from "@/app/shared/add-property-button";


// SEO metadata
export const metadata: Metadata = {
  title: "Типы недвижимости | StayFlex",
};

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
  return (
    <><>
    <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
        {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
        <h3 style={{paddingLeft: '3px'}}>Типы недвижимости</h3>
        <AddPropertyButton className="w-fit" title={'Import File'} />
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