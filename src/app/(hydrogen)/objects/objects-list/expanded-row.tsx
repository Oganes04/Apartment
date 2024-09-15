import DateTime from '@/app/shared/appointment/appointment-list/appointment-form/data-time';
import { Text } from 'rizzui';

export default function ExpandedOrderRow({ record }: any) {
  if (record?.cities?.length === 0) {
    return <Text>Пока пусто</Text>;
  }
  return (
    <div className="">
      
        <div className='flex items-center gap-20 mb-4' style={{fontSize: '14px', fontWeight: 'bold'}}> 
            <Text className="font-medium text-gray-700" style={{width: '20%'}}>{'Адрес'}</Text>
            <Text className="font-medium text-gray-700" style={{width: '7%'}}>{'Площадь'}</Text>
            <Text className="font-medium text-gray-700" style={{width: '15%'}}>{'Тип'}</Text>
        </div>
        <div className='flex items-center gap-20 mb-8' style={{fontSize: '12px', fontWeight: 'normal'}}>
            <Text className="font-medium text-gray-700" style={{width: '20%'}}>{record.address}</Text>
            <Text className="font-medium text-gray-700" style={{width: '7%'}}>{record.square}</Text>
            <Text className="font-medium text-gray-700" style={{width: '15%'}}>{record.type}</Text>
        </div>

        <div className='flex items-center gap-20 mb-4' style={{fontSize: '14px', fontWeight: 'bold'}}> 
            <Text className="font-medium text-gray-700" style={{width: '20%'}}>{'Стоимость за сутки'}</Text>
            <Text className="font-medium text-gray-700" style={{width: '7%'}}>{'Предоплата'}</Text>
            <Text className="font-medium text-gray-700" style={{width: '15%'}}>{'Спальные места'}</Text>
        </div>
        <div className='flex items-center gap-20 mb-8' style={{fontSize: '12px', fontWeight: 'normal'}}>
            <Text className="font-medium text-gray-700" style={{width: '20%'}}>{record.price}</Text>
            <Text className="font-medium text-gray-700" style={{width: '7%'}}>{record.prepayment}</Text>
            <Text className="font-medium text-gray-700" style={{width: '15%'}}>{record.sleepingPlaces}</Text>
        </div>
        <DateTime></DateTime>
    </div>
    
  );
}
