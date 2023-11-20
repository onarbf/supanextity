"use client"
import { ReactNode, useState } from "react"
import { Context } from "../context/store"
import { CONTEXT } from "../constants/store"

//Context provider to handle global state
export const ContextProvider = ({children}:{children: ReactNode})=>{
    const [color, setColor] = useState<typeof CONTEXT['color']>(CONTEXT.color);

    return (<Context.Provider value={{color, setColor}}>
        {children}
    </Context.Provider>)

}

