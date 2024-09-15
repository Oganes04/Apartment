import DateTime from '@/app/shared/appointment/appointment-list/appointment-form/data-time';
import Image from 'next/image';
import { PiXBold } from 'react-icons/pi';
import { Title, Text, Input, cn, Button } from 'rizzui';

export default function ExpandedOrderRow({ record }: any) {
  if (record?.cities?.length === 0) {
    return <Text>Пока пусто</Text>;
  }
  return (
    <div className="">
      
        <div className='flex items-center gap-20'> 
            <Input placeholder='Название'  defaultValue={record.name} label = 'Название'></Input>
            <Input placeholder='IP'  defaultValue={record.ip} label = 'IP'></Input>
            <Input placeholder='Логин' type='text'  defaultValue={record.login} label = 'Логин'></Input>
            <Input placeholder='Пароль'  defaultValue={record.password} type='text' label = 'Пароль'></Input>
           
        </div>

        <div className='flex items-center justify-end mt-5'>
          <Button className={cn('w-fit @lg:w-auto', )}>Сохранить</Button>
        </div>
        

    </div>
    
  );
}
