'use client'

import { ReactNode, useContext, useState } from "react"
import { createContext } from "react"
import { INITIAL_STORE } from "../constants/store"


const contextObject = {
    color: INITIAL_STORE.COLOR,
    setColor: (value:string)=>{},
}

const GlobalContext = createContext<typeof contextObject>(contextObject)

export const GlobalContextProvider = ({children}:{children: ReactNode})=>{
    const [color, setColor] = useState<typeof contextObject['color']>(INITIAL_STORE.COLOR);

    return (<GlobalContext.Provider value={{color, setColor}}>
        {children}
    </GlobalContext.Provider>)

}

export const useGlobalContext = ()=> useContext(GlobalContext);