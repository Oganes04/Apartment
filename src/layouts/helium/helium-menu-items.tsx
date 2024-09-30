import { routes } from '@/config/routes';
import {
  PiMapPinLine,
  PiUser,
  PiShootingStar,
  PiRocketLaunch,
  PiHammer,
  PiUserPlus,
  PiShieldCheck,
  PiLockKey,
  PiChatCenteredDots,
  PiHouseLine,
  PiCalendarDuotone,
  PiNoteBlank,
} from 'react-icons/pi';
import UserCog from '@/components/icons/user-cog';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import translations from './language.json';
import { Language } from '@/components/settings/language-types'

// Note: do not add href in the label object, it is rendering as label

export const menuItems = [
  // label start
  {
    name: 'Администратор',
  },
  {
    name: 'Пользователи',
    href: routes.users.home,
    icon: <UserCog />,
  },
  {
    name: 'Серверы',
    href: routes.servers,
    icon: <PiRocketLaunch />,
  },
  {
    name: 'Регионы',
    href: routes.region,
    icon: <PiMapPinLine />,
  },
  {
    name: 'Города',
    href: routes.cities,
    icon: <PiMapPinLine />,
  },
  {
    name: 'Типы недвижимости',
    href: routes.propertyType,
    icon: <PiHouseLine />,
  },
  {
    name: 'Удобства',
    href: routes.conveniences,
    icon: <PiShootingStar />,
  },
  {
    name: 'Объекты',
    href: routes.adminObjects,
    icon: <PiHouseLine />,
  },
  {
    name: 'Клиенты',
    href: routes.clients,
    icon: <PiUser />,
  },
  {
    name: 'Брони',
    href: routes.reservations,
    icon: <PiCalendarDuotone />,
  },



  // label start
  {  
    name: 'Пользователь',
  },

  {
    name: 'Объекты',
    href: routes.objects,
    icon: <PiHouseLine />,
  },
  {
    name: 'Сервисы',
    href: routes.services,
    icon: <PiHammer />,
  },
  {
    name: 'Клиенты',
    href: routes.clients,
    icon: <PiUser />,
  },
  {
    name: 'Брони',
    href: routes.reservations,
    icon: <PiCalendarDuotone />,
  },

  {
    name: 'Виджет',
    href: routes.widget,
    icon: <PiNoteBlank />,
  },



  // label start
  {
    name: 'Authentication',
  },
  // label end
  {
    name: 'Elegant Sign up',
    href: routes.auth.signUp4,
    icon: <PiUserPlus />,
  },
  {
    name: 'Elegant Sign in',
    href: routes.auth.signIn4,
    icon: <PiShieldCheck />,
  },
  {
    name: 'Forgot Password',
    href: routes.auth.forgotPassword4,
    icon: <PiLockKey />,
  },
  {
    name: 'OTP Page',
    href: routes.auth.otp4,
    icon: <PiChatCenteredDots />,
  },
];
