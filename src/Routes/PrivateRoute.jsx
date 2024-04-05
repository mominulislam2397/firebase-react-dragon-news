import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if(loading){
    return <span className="loading loading-spinner text-error"></span>
  }
  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;