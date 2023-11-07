import '@/app/styles/globals.css'
import Footer from '@/app/components/footer';
import { Layout} from '@/app/types/index.t';

import { locales } from '@/app/constants/locale';
import { notFound } from 'next/navigation';

//IN PROGRESS
export function generateStaticParams() {
  return [{locale: 'es'}, {locale: 'en'}, {locale: 'de'}];
}

//generating metadata 
export { generateMetadata } from '@/app/utils/metadata';

export default async function Layout({children, params: {locale}}: Layout) {

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={locale}>
      <body>
          {children}
          <Footer/>
      </body>
    </html>
  );
}

