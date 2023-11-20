import {getRequestConfig as getLocaleMessages} from 'next-intl/server';
import deepmerge from 'deepmerge';
import { defaultLocale } from '@/app/constants/locale';


//this function uses the default translation in case we don't have that translation on other language. Basically returns the correct dictionary.
//We use this function in the metadata and as a config file for the next.config.js file. Dunno why is needed, probably compilation
export default getLocaleMessages(async ({locale}) =>{{ 

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