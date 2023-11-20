import { getTranslations } from "next-intl/server";
import Link from "next/link";


export default async function NotFound(){
    const t = await getTranslations("Index.Path.NotFound")
    return(
        <main className="my-[42px] flex flex-col items-center">
            <h1 className="text-[2rem] font-bold">{t('title')}</h1>
            <h2 className="text-[1.5rem] ">Volver a la <Link  className="underline" href="/"> Home</Link></h2>
        </main>
    )
}