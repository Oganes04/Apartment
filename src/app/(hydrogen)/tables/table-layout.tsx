'use client';

import PageHeader, { PageHeaderTypes } from '@/app/shared/page-header';
import ImportButton from '@/app/shared/import-button';
import ExportButton from '@/app/shared/export-button';

type TableLayoutProps = {
  data: unknown[];
  header: string;
  fileName: string;
} & PageHeaderTypes;

export default function TableLayout({
  data,
  header,
  fileName,
  children,
  ...props
}: React.PropsWithChildren<TableLayoutProps>) {
  return (
    <>
   

      {children}
    </>
  );
}
