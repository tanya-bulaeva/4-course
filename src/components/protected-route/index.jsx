import { Navigate, Outlet } from "react-router-dom";
/*
export const ProtectedRoute = ({ redirectPath = "/login"}) => {
  if (!localStorage.getItem('user')) { //getItem(key) – получить данные по ключу key.
   return <Navigate to={redirectPath} replace= {true}/>;
 }

  return <Outlet />;
};
*/

export const ProtectedRoute = ({ children, redirectPath = "/"}) => {
    if (!localStorage.getItem('user')) {
      return <Navigate to={redirectPath} replace={true} />;
    }
  
    return children;
  };