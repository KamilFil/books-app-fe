import {Navigate, Outlet} from "react-router-dom";
import {UseAuthProvider} from "./useAuthProvider";


export const PrivateRoute = () => {
    const auth = UseAuthProvider()

        if(auth.auth === null) {
            return <p>Weryfikacja użytkownika</p>
        }  else {
          return auth.auth ? <Outlet/> : <Navigate to={"/login"}></Navigate>
        }
}