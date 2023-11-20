import LanguageSwitcher from "../language-switcher";
import ThemeSwitcher from "../theme-switcher";

export default function Footer(){
    return(<footer className=" mt-2 flex items-center justify-center gap-2 border-t-[1px] pt-2">
        <LanguageSwitcher/>
        <ThemeSwitcher/>
    </footer>)
}


