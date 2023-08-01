import {useEffect, useState} from "react";
import {apiAuthUser, apiLoginUser} from "../api/api";

interface FormLoginValues {
    username: string,
    password: string,
}
export interface UseAuthProviderType {
    login: (data:FormLoginValues) => Promise<string | void | boolean>,
    user:boolean | null
    auth:boolean | null

}
export const UseAuthProvider = (): UseAuthProviderType => {
    const [user, setUser] = useState<boolean | null >(null)
    const [auth, setAuth] = useState<boolean | null>(null)
    useEffect(() => {
        (async () => {
            try {
                const res = await apiAuthUser()
                const fetchUser = res.data;
                const authUser = {...fetchUser, auth:true}
                if(authUser){
                    setAuth(authUser)
                }
            } catch(e){
                setAuth(false)
            }
        })()
    },[setAuth])

    const login = async  (data:FormLoginValues): Promise<string | void | boolean> => {
        try {
            const response = await apiLoginUser(data).then((res) => res.data)
            if(response.status === 404){
                setUser(false)
                return false

            } else {
                setUser(true)
                return true
            }


        } catch(e) {
         return console.log(e)
        }
    }

    return {
        auth,
        user,
        login,
    }

}