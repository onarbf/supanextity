import '@/app/styles/globals.css'
import Footer from '@/app/components/footer';
import {NextIntlClientProvider} from 'next-intl';
import { Layout} from '@/app/types/index.t';
import { getLocaleMessages } from '@/app/utils/messages';


//IN PROGRESS
export function generateStaticParams() {
  return [{locale: 'es'}, {locale: 'en'}, {locale: 'de'}];
}

//generating metadata 
export { generateMetadata } from '@/app/utils/metadata';

export default async function Layout({children, params: {locale}}: Layout) {
  const messages = await getLocaleMessages(locale);
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

