import { Navigate, Outlet } from "react-router-dom";
import MainBlock from "../MainBlock/MainBlock";


export const ProtectedRoute = ({ redirectPath = "/login"}) => {
  if (!localStorage.getItem('user')) {
   return <Navigate to={redirectPath} replace= {true}/>;
 }

  return  <MainBlock><Outlet /></MainBlock>;

};
