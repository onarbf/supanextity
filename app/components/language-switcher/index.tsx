import Link from "next-intl/link";
import { locales } from "@/app/constants/locale";

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-2">
      {locales.map((locale) => {
        return (
          <div key={locale}>
            <Link locale={locale} href={"/"}>
              {locale.toUpperCase()}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
