import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const createUser = (email, password ) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password)
  }


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUSer => {
      console.log('user in the reload obserbe', currentUSer);
      setUser(currentUSer);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  },[])


  const authInfo = {
    user, 
    loading,
    createUser, 
    signIn,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;