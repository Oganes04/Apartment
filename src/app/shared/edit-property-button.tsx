'use client';

import dynamic from 'next/dynamic';
import { Button } from 'rizzui';
import cn from '@/utils/class-names';
import { PiListPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import AddRegionForm from './add-region-form';
import AddPropertyForm from './add-property-form';
import EditPropertyForm from './edit-property-form';
import PencilIcon from '@/components/icons/pencil';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type EditPropertyButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  id?: string;
};

export default function EditPropertyButton({
  title,
  modalBtnLabel = '',
  className,
  buttonLabel = '',
  id,
}: React.PropsWithChildren<EditPropertyButtonProps>) {
  const { openModal } = useModal();

  return (

     <Button
     style={{width: '28px', height: '28px', backgroundColor: 'transparent', padding: '0'}}
       onClick={() =>
         openModal({
           view: (
             <EditPropertyForm
               label={'Редактировать'}
                id={cn(id)}
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
