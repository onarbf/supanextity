import {useTranslations} from 'next-intl'
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('Index')

  return <div>
    <div className="flex flex-col items-center py-4 text-[2rem]">
    <h1>{t('Path.About.title')}</h1>
    </div>
    <div className="flex justify-center underline">
    <Link href='/'>{t('Path.Home.title')}</Link>
    </div>
  </div>;
} 