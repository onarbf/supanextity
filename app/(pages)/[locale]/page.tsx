import Playground from '@/app/components/playground';
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('Index');
  
  return <div>
    <div className="flex flex-col items-center justify-center py-4  text-[2rem]">
    <h1>{t('Path.Home.title')}</h1>
  
    <Playground/>
    </div>
    <div className="flex justify-center underline">
    <Link href='/about'>About</Link>
    </div>
  </div>;
}