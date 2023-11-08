import {Link} from "@/app/messages/navigation";
import { locales } from "@/app/constants/locale";
import { getLocale } from "next-intl/server";

export default async function LanguageSwitcher() {
  const activeLocale = await getLocale();
  
  return (
    <div className="flex gap-2">
      {locales.map((locale) => {
        return (
          <div key={locale}>
            <Link className={locale===activeLocale? 'font-bold':''} locale={locale} href={"/"}>
              {locale.toUpperCase()}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
