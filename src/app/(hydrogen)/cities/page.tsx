import { Metadata } from "next";
import { getWidgetColumns } from '@/app/shared/cities-list/typecolumns';
import TableLayout from '@/app/(hydrogen)/tables/table-layout';
import { cityData } from '@/data/city-data';
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import ImportButton from "@/app/shared/import-button";
import AddCityButton from "@/app/shared/add-city-button";

const citiesList = cityData.flatMap(data => data.cities.map(city => ({
  id: city.id,
  name: city.city,
  items: city.items,
  region: city.region,
  status: city.status,
})));


// SEO metadata
export const metadata: Metadata = {
  title: "Города | StayFlex",
};

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
  return (
    <>
      <div className="mt-4 mb-4 flex items-center justify-between gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <h3 style={{paddingLeft: '3px'}}>Список городов</h3>
          <AddCityButton className="w-fit" title={'Import File'} />
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