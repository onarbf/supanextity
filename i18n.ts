import {getRequestConfig} from 'next-intl/server';
import deepmerge from 'deepmerge';
import { defaultLocale } from '@/app/constants/locale';
export default getRequestConfig(async ({locale}) =>{{ 

  let messages;
  const defaultMessages = (await import(`@/app/messages/${defaultLocale}.json`)).default;
  if(locale){
    const localeMessages = (await import(`@/app/messages/${locale}.json`)).default;
    messages = deepmerge(defaultMessages, localeMessages);
  }else{
    messages = defaultMessages;
  }  
  return {
    messages
  }}
});