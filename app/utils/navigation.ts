import { createSharedPathnamesNavigation} from 'next-intl/navigation';

import {locales } from '@/app/constants/locale' ;

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});