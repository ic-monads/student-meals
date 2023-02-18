import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth";

interface IAuthContext {
  currentUser: User | null;
  signup(email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<UserCredential>;
  logout(): Promise<void>;
}

const AuthContext = React.createContext({} as IAuthContext);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value: IAuthContext = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}