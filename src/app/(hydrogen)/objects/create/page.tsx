import { metaObject } from '@/config/site.config';
import ObjectCreateView from '@/app/shared/object-create';

export const metadata = {
  ...metaObject('Profile Settings'),
};

export default function ProfileSettingsFormPage() {
  return <ObjectCreateView />;
}
