
"use client"
import { ReactNode} from "react"
import { ContextProvider } from "./context-provider";
import { ThemeProvider } from "./theme-provider";



export const Provider = ({children} : {children: ReactNode}) => {

  return (
    <ContextProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    </ContextProvider>
  )
}


