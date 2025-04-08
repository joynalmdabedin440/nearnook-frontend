import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    
    const createMerchant = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginMerchant = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    const merchantInfo = {

        createMerchant,
        loginMerchant

    }
    return (
        <AuthContext.Provider value={merchantInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;