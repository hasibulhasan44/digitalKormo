import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

    export const AuthContext =createContext();

const AuthProvider = ({children}) => {

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
      });
    
    
      const toggleMode = () => {
        if (myStyle.color === "black") {
          setMyStyle({
            color: "white",
            backgroundColor: "black",
          });
        } else {
          setMyStyle({
            color: "black",
            backgroundColor: "white",
          });
        }
      };

    const[user, setUser] = useState(null);

    const [loading, setLoading] =useState(true);

    const auth = getAuth(app);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (googleProvider) =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = (githubProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const updateUserProfile =(profile)=>{
        return updateProfile (auth.currentUser, profile)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {auth, createUser, signIn, user, googleSignIn, githubSignIn, logOut, myStyle, toggleMode, updateUserProfile, loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;