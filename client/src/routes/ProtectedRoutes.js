import Cookies from 'js-cookie';
import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({component: Component, ...rest}) => {
  const accessToken = Cookies.get("token");
return accessToken ? <Component {...rest}/> : <Navigate to = '/login' replace/>
}

export default ProtectedRoutes

