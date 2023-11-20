'use client'

import { useContext as useReactContext} from "react"
import { createContext } from "react"
import { CONTEXT } from "../constants/store";

export const Context = createContext<typeof CONTEXT>(CONTEXT)

export const useContext = ()=> useReactContext(Context);