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
import EditConveniencesForm from './edit-conveniences-form';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type EditConveniencesButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  id?: string;
};

export default function EditConveniencesButton({
  title,
  modalBtnLabel = '',
  className,
  buttonLabel = '',
  id,
}: React.PropsWithChildren<EditConveniencesButtonProps>) {
  const { openModal } = useModal();

  return (

     <Button
     style={{width: '28px', height: '28px', backgroundColor: 'transparent', padding: '0'}}
       onClick={() =>
         openModal({
           view: (
             <EditConveniencesForm
               label={'Редактировать удобство'}
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
