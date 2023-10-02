import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import {Login } from "./pages/login";
import {Favorites } from "./pages/favorites";
import {NotFound} from "./pages/not-found"
import { Category } from "./pages/category";
import { Register } from "./pages/register";
import { ProtectedRoute } from "./components/protected-route";
export const AppRoutes = ({user, tracks, tracksError}) => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
      <Route path="/" element={<Main tracks = {tracks} tracksError={tracksError} > </Main>} />
        <Route path="/favorites" element={<Favorites  />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
//
