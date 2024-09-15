'use client';

import dynamic from 'next/dynamic';
import { Button } from 'rizzui';
import cn from '@/utils/class-names';
import { PiListPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import AddRegionForm from './add-region-form';
import AddPropertyForm from './add-property-form';
import AddConveniencesForm from './add-conveniences-form';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type AddConveniencesButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
};

export default function AddConveniencesButton({
  title,
  modalBtnLabel = 'Добавить удобство',
  className,
  buttonLabel = 'Добавить',
}: React.PropsWithChildren<AddConveniencesButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() =>
        openModal({
          view: (
            <AddConveniencesForm
              label='Добавить удобство'
              btnLabel={''}
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
