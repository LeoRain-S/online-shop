import { createContext, useState, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

// actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })

    return unsubcribe
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
