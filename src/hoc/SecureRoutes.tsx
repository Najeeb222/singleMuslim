
import { useAuth } from "@muc/context";

import { Navigate, Outlet, useLocation } from "react-router-dom";


export const SecureRoutes = () => {
    const { user } = useAuth();
    const location = useLocation();
    console.log(user, "this is user")



    return !user ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />
}




export default SecureRoutes
