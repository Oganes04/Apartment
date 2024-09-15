'use client';

import dynamic from 'next/dynamic';
import { Button } from 'rizzui';
import cn from '@/utils/class-names';
import { PiListPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import AddRegionForm from './add-region-form';
import PencilIcon from '@/components/icons/pencil';
import EditRegionForm from './edit-region-form';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type EditRegionButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  id?: number;
};

export default function EditRegionButton({
  title,
  modalBtnLabel = 'Редактировать регион',
  className,
  buttonLabel = '',
  id,
}: React.PropsWithChildren<EditRegionButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
    style={{width: '28px', height: '28px', backgroundColor: 'transparent', padding: '0'}}
      onClick={() =>
        openModal({
          view: (
            <EditRegionForm
              label={cn('Редактировать')}
              accept="csv"
              multiple={false}
              btnLabel={modalBtnLabel}
              id={id}
            />
          ),
          customSize: '480px',
        })
      }
      className={cn('w-full @lg:w-auto hover:!border-gray-900 hover:text-gray-700 border-muted', className)}
      >
  
          <PencilIcon className="h-4 w-4 hover:text-gray-700 text-gray-500" style={{minWidth: '16px'}} />
      {buttonLabel}
    </Button>
  );
}
