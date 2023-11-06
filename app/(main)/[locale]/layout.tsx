import '@/app/styles/globals.css'
import Footer from '@/app/components/footer';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
 

interface Props{
    children: React.ReactNode,
    params: {
        locale: string
    }
}
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}
 
export default async function Layout({children, params: {locale}}: Props) {
  let messages;
  
  try {
    messages = (await import(`@/lib/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
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