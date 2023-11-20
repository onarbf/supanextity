'use client'

import { useContext as useReactContext} from "react"
import { createContext } from "react"
import { CONTEXT } from "../constants/store";

//we create the context. THis is being exported to the providers.
export const Context = createContext<typeof CONTEXT>(CONTEXT)

//the hook to use the context
export const useContext = ()=> useReactContext(Context);