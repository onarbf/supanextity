
import GoogleSignIn from '@/app/components/auth/google-signin';
import Logout from '@/app/components/auth/logout';
import { supabaseFromServer } from '@/app/server/supabase/from-server';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic'
export default async function Index() {
  const t = await getTranslations("Index.Path.Home")
  const supabase = await supabaseFromServer();
  const {data: {session},error} = await supabase.auth.getSession();
  
  if(session){
    console.log(session)
  }
  return (
  <section>
    <div className="flex flex-col items-center ">
      {!session ? <GoogleSignIn/>: <div> <Logout/> </div>}
      <h1 className="text-[1.2rem] font-medium sm:text-[3rem] sm:font-normal">{t('header')}</h1>
      <h2 className="text-[1rem] font-medium sm:text-[2rem] sm:font-normal">{t('subheader')}</h2>
    </div>
  </section>);
} 