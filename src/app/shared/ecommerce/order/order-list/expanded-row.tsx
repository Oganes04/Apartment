import Image from 'next/image';
import { PiXBold } from 'react-icons/pi';
import { Title, Text } from 'rizzui';

export default function ExpandedOrderRow({ record }: any) {
  if (record?.cities?.length === 0) {
    return <Text>Пока пусто</Text>;
  }
  return (
    <div className="grid grid-cols-1 divide-y bg-gray-0 px-3.5 dark:bg-gray-50">
      
      {record?.cities.map((city: any) => (
        <article
          key={record.id + city.city}
          className="flex items-center justify-between py-6 first-of-type:pt-2.5 last-of-type:pb-2.5"
        >
          <div className="flex items-start">
            <header>
              <Title as="h4" className="mb-0.5 text-sm font-medium">
                {city.city}
              </Title>
            </header>
          </div>
          <div className="flex w-full max-w-xs items-center justify-between gap-4">
            <div className="flex items-center">
              <PiXBold size={13} className="me-1 text-gray-500" />{' '}
              <Text
                as="span"
                className="font-medium text-gray-900 dark:text-gray-700"
              >
                {city.quantity}
              </Text>
            </div>
            
          </div>
        </article>
      ))}
    </div>
  );
}
