
"use client"
import { ReactNode} from "react"
import { ContextProvider } from "./context-provider";
import { ThemeProvider } from "./theme-provider";


//Just a wrapper for the context provider and the theme provider. Also a placer where to add the rest of providers if needed.
export const Provider = ({children} : {children: ReactNode}) => {

  return (
    <ContextProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    </ContextProvider>
  )
}


