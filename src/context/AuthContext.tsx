import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como Luce y que informacion contempla en contex
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Props que usaremos para decirle a react como luce y
// que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFaviteIcon: (iconName: string) => void;

    changeUserName: (name: string) => void;
}

//Crear un context

export const AuthContext = createContext( {} as AuthContextProps)

//Componete proveedor del estado

export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type:'signIn'})
    }

    const changeFaviteIcon = (iconName:string) => {
        dispatch({type:'changeFavIcon', payload: iconName})
    }

    const changeUserName = (name:string) => {
        dispatch({type:'changeUserName', payload: name})
    }

    return (
        <AuthContext.Provider value={{
            authState, //authState: authInitialState,
            signIn, //signIn: signIn
            changeFaviteIcon,
            
            changeUserName
        }}
        >
            {children}
        </AuthContext.Provider> 
    )
}