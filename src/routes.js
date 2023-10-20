import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import {Login } from "./pages/login";
import {Favorites } from "./pages/favorites";
import {NotFound} from "./pages/not-found"
import { Category } from "./pages/category";
import { Register } from "./pages/register";
import { ProtectedRoute } from "./components/protected-route";
export const AppRoutes = ({user,  tracksError, loading}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main tracksError={tracksError} user = {user} loading = {loading}> </Main>} />
        <Route path="/favorites" element={<Favorites  tracksError={tracksError} loading = {loading} />} />
        <Route path="/category/:id" element={<Category   tracksError={tracksError}  loading = {loading}  />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
