import { createContext, useContext, useEffect, useState } from "react";
import { httpClient } from "../lib/httpClient";

type User = {
  id: string;
  name: string;
  email: string;
  category: {
    name: string;
  }
}

type AuthContextProps = {
  isSignedIn: boolean;
  user: User | null;
  signIn: (token: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const accessTokenKey = 'access-token:hackaton';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return !!localStorage.getItem(accessTokenKey);
  });
  const [user, setUser] = useState<User | null>(null);

  function signIn(token: string) {
    localStorage.setItem(accessTokenKey, token)
    setIsSignedIn(true);
  }

  function signOut() {
    localStorage.removeItem(accessTokenKey);
    setIsSignedIn(false);
  }

  useEffect(() => {
    if (isSignedIn) {
      fetchUser();
    }

    async function fetchUser() {
      try {
        const { data } = await httpClient.get<User>('/user/me');
        setUser(data);
      } catch {
        signOut();
      }
    }
  }, [isSignedIn]);

  return (
    <AuthContext.Provider value={{ isSignedIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}
