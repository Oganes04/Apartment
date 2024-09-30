'use client';

import { RadioGroup } from 'rizzui';
import { useLanguage } from '@/hooks/use-language'; // Предполагаем, что этот хук теперь используется для работы с языком
import { LAYOUT_OPTIONS } from '@/config/enums'; // Можно удалить, если больше не используется
import HydrogenIcon from '@/layouts/hydrogen-icon';
import HeliumIcon from '@/layouts/helium-icon';
import LithiumIcon from '@/layouts/lithium-icon';
import BerylliumIcon from '@/layouts/beryllium-icon';
import RadioBox from '@/components/settings/radio-box';
import DrawerBlock from '@/components/settings/drawer-block';
import BoronIcon from '@/layouts/boron-icon';
import CarbonIcon from '@/layouts/carbon-icon';
import RuIcon from '@/layouts/ru-icon';
import EnIcon from '@/layouts/en-icon';
import Cookies from 'js-cookie'; // Для работы с cookie
import { useEffect } from 'react'; // Для работы с побочными эффектами

const languageOptions = [
  {
    icon: RuIcon,
    value: 'ru',
  },
  {
    icon: EnIcon,
    value: 'en',
  },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage(); // Используем setLanguage вместо setLayout

  // При загрузке компонента проверяем наличие значения языка в cookie
  useEffect(() => {
    const savedLanguage = Cookies.get('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [setLanguage]);

  const handleLanguageChange = (selectedLanguage: any) => {
    setLanguage(selectedLanguage);
    Cookies.set('language', selectedLanguage, { expires: 365 }); // Сохраняем значение языка в cookie на 1 год
    setTimeout(() => {
      window.location.reload();
    }, 50); // Делаем небольшое промежуток перед перезагрузкой
  };

  return (
    <DrawerBlock title="Язык">
      <RadioGroup
        value={language} // Используем переменную language вместо layout
        setValue={handleLanguageChange} // Используем функцию для изменения языка
        className="grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {languageOptions.map((item) => (
          <RadioBox
            key={item.value}
            value={item.value}
            className="h-auto"
            contentClassName="p-0 [&_.radio-active]:ring-primary/0 peer-checked:ring-0 border-0 ring-0 peer-checked:border-0 peer-checked:[&_.radio-active]:ring-primary/100 [&_.radio-active]:ring-2 peer-checked:text-primary"
          >
            <span className="flex w-full justify-center">
              <span className="radio-active mb-3 inline-flex justify-center rounded-lg capitalize ring-offset-4 ring-offset-gray-0 duration-150 dark:ring-offset-gray-100">
                <item.icon
                  aria-label={item.value}
                  className="h-[92px] w-full"
                />
              </span>
            </span>
            <span className="inline-block w-full text-center">
              {item.value}
            </span>
          </RadioBox>
        ))}
      </RadioGroup>
    </DrawerBlock>
  );
}
