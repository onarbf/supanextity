'use client';
 
import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function Index() {
  const t = useTranslations('Index');
  return <div>
    <h1>{t('Path.Home.title')}</h1>
    <Link href='/about'>About</Link>
  </div>;
}