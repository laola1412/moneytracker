import { createContext, useState } from "react"
export const ModalContext = createContext({

})

export function ModalProvider({ children }) {
   return (
      <ModalContext.Provider>
         { children }
      </ModalContext.Provider>
   )
}