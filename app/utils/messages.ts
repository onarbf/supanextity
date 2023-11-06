import { AbstractIntlMessages } from "next-intl";
import { defaultLocale} from "../constants/locale";
import deepmerge from 'deepmerge';

export async function getLocaleMessages(locale:string): Promise<AbstractIntlMessages> {
    let messages;
    const defaultMessages = (await import(`@/app/messages/${defaultLocale}.json`)).default;
    if(locale){
      const localeMessages = (await import(`@/app/messages/${locale}.json`)).default;
      messages = deepmerge(defaultMessages, localeMessages);
    }else{
      messages = defaultMessages;
    }
    
    return messages;
  }