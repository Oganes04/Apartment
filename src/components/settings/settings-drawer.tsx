'use client';

import { Button, Select } from 'rizzui';
import SimpleBar from '@/components/ui/simplebar';
import EnvatoIcon from '@/components/icons/envato';
import LayoutSwitcher from '@/components/settings/layout-switcher';
import ColorOptions from '@/components/settings/color-options';
import AppDirection from '@/components/settings/app-direction';
import ThemeSwitcher from '@/components/settings/theme-switcher';
import LanguageSwitcher from './language-switcher';

export default function SettingsDrawer() {
  return (
    <>
      <SimpleBar className="h-[calc(100%-138px)]">
        <div className="px-5 py-6">
          <ThemeSwitcher />
          {/* <AppDirection /> */}
          {/* <LayoutSwitcher /> */}
          <LanguageSwitcher />



          <ColorOptions />
        </div>
      </SimpleBar>

      {/* <SettingsFooterButton /> */}
    </>
  );
}

