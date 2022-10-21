import { createContext, useState } from "react"
export const UserContext = createContext({
   currentUser: null
   setCurrentUser: () => null
})

export function UserProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(null);
   const value = { currentUser, setCurrentUser}

   return (
      <UserProvider.Provider value={value}>
         { children }
      </UserProvider.Provider>
   )
}