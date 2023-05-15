import React, {createContext} from "react";
import {UseAuthProvider, UseAuthProviderType} from "./useAuthProvider";

type Props = {
    children?: React.ReactNode
};

export const AuthContext = createContext<UseAuthProviderType | null  >(null)

export const AuthProvider:React.FC<Props> = ({children}) => {
    const auth = UseAuthProvider()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}