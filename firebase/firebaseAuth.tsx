'use client'

import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { auth } from './firebaseInit';
import firebase from 'firebase/auth'


interface Props {
    children: React.ReactNode;
}
  
interface AuthContextType {
  currentUser: firebase.User | null;
}


const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

const AuthProvider: React.FC<Props> = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  console.log(currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{props.children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
