import { createSharedPathnamesNavigation} from 'next-intl/navigation';

import {locales } from '@/app/constants/locale' ;

//This configuration is needed only in case we are going to make routes between translations
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});