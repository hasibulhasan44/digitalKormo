import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
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

    const auth = getAuth(app);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (googleProvider) =>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = (githubProvider)=>{
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {auth, createUser, signIn, user, googleSignIn, githubSignIn, logOut, myStyle, toggleMode}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;