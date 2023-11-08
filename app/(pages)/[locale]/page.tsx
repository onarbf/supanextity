;import PostsList from '@/app/components/posts-list';
import { getPosts } from '@/app/server/posts';
import { getTranslations } from 'next-intl/server';


export  default async function Index() {
  const t = await getTranslations("Index.Path.Home")
  const posts = await getPosts();
  return (
  <section>
    <div className="flex flex-col items-center ">
      <h1 className="text-[1.2rem] font-medium sm:text-[3rem] sm:font-normal">{t('header')}</h1>
      <h2 className="text-[1rem] font-medium sm:text-[2rem] sm:font-normal">{t('subheader')}</h2>
    </div>
    <div className="m-auto my-4 w-[50vw]">
      <PostsList/>
    </div>
  </section>);
} 