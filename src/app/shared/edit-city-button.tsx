'use client';

import dynamic from 'next/dynamic';
import { ActionIcon, Button } from 'rizzui';
import cn from '@/utils/class-names';
import { PiListPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import AddRegionForm from './add-region-form';
import PencilIcon from '@/components/icons/pencil';
import EditRegionForm from './edit-region-form';
import EditCityForm from './edit-city-form';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type EditCityButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  id?: number;
  region?: string;
};

export default function EditCityButton({
  title,
  modalBtnLabel = 'Редактировать город',
  className,
  buttonLabel = '',
  id,
  region,
}: React.PropsWithChildren<EditCityButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
    style={{width: '28px', height: '28px', backgroundColor: 'transparent', padding: '0'}}
      onClick={() =>
        openModal({
          view: (
            <EditCityForm
              label={cn('Редактировать')}
              id={id}
              region={region}
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
