import { Navigate, Outlet } from "react-router-dom";
import MainBlock from "../mainBlock/MainBlock";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {
  if (!localStorage.getItem('user')) { //getItem(key) – получить данные по ключу key.
   return <Navigate to={redirectPath} replace= {true}/>;
 }

  return  <MainBlock ><Outlet /></MainBlock>;

};
