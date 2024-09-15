'use client';

import dynamic from 'next/dynamic';
import { Button } from 'rizzui';
import cn from '@/utils/class-names';
import { PiListPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type ImportButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
};

export default function ImportButton({
  title,
  modalBtnLabel = 'Добавить регион',
  className,
  buttonLabel = 'Добавить',
}: React.PropsWithChildren<ImportButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() =>
        openModal({
          view: (
            <FileUpload
              label='Добавить регион'
              accept="csv"
              multiple={false}
              btnLabel={modalBtnLabel}
            />
          ),
          customSize: '480px',
        })
      }
      className={cn('w-full @lg:w-auto', className)}
    >
      <PiListPlusBold className="me-1.5 h-[17px] w-[17px]" />
      {buttonLabel}
    </Button>
  );
}
