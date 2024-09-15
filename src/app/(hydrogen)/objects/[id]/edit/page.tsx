import { metaObject } from '@/config/site.config';
import PersonalInfoView from '@/app/shared/account-settings/personal-info';
import UserInfoView from '@/app/shared/user-info';
import ObjectInfoView from '@/app/shared/object-info';

export const metadata = {
  ...metaObject('Profile Settings'),
};

export default function ProfileSettingsFormPage() {
  return <ObjectInfoView />;
}
