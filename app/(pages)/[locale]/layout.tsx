import '@/app/styles/globals.css'
import Footer from '@/app/components/footer';
import { Layout} from '@/app/types/index.t';

import { locales } from '@/app/constants/locale';
import { notFound } from 'next/navigation';
import { GlobalContextProvider } from '@/app/context/store';

//generating metadata 
export { generateMetadata } from '@/app/utils/metadata';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function Layout({children, params: {locale}}: Layout) {

  if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale}>
     
      <body>
        <GlobalContextProvider>
          {children}
          <Footer/>
        </GlobalContextProvider>
      </body>
      
    </html>
  );
}

