import { createContext, useContext, useState } from "react";

type AuthContextProps = {
  isSignedIn: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const accessTokenKey = 'access-token:hackaton';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return !!localStorage.getItem(accessTokenKey);
  });

  function signIn(token: string) {
    localStorage.setItem(accessTokenKey, token)
    setIsSignedIn(true);
  }

  function signOut() {
    localStorage.removeItem(accessTokenKey);
    setIsSignedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}
