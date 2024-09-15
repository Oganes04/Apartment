'use client';

import dynamic from 'next/dynamic';
import { Button } from 'rizzui';
import cn from '@/utils/class-names';
import { PiCalendarPlus, PiInfo, PiListPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import AddRegionForm from './add-region-form';
import PencilIcon from '@/components/icons/pencil';
import EditRegionForm from './edit-region-form';
import EditSubscribtionForm from './edit-subscribtion-form';
import InfoReservationForm from './info-reservation-form';
import { object } from 'zod';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type InfoReservationButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  id: string;
  object: string;
  date: string;
  phone: string;
  name: string;
  email: string;
};

export default function InfoReservationButton({
  title,
  modalBtnLabel = 'Информация по брони',
  className,
  buttonLabel = '',
  id,
  object,
  date,
  phone,
  name,
  email,
}: React.PropsWithChildren<InfoReservationButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
    style={{width: '28px', height: '28px', backgroundColor: 'transparent', padding: '0'}}
      onClick={() =>
        openModal({
          view: (
            <InfoReservationForm
              label={cn('Информация по брони')}
              accept="csv"
              multiple={false}
              btnLabel={modalBtnLabel}
              id={id}
              object={object}
              date={date}
              name={name}
              phone={phone}
              email={email}
            />
          ),
          customSize: '480px',
        })
      }
      className={cn('w-full @lg:w-auto hover:!border-gray-900 hover:text-gray-700 border-muted', className)}
      >
  
          <PiInfo className="h-4 w-4 hover:text-gray-700 text-gray-500" style={{minWidth: '16px'}} />
      {buttonLabel}
    </Button>
  );
}
