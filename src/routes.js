import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import {Login } from "./pages/login";
import {Favorites } from "./pages/favorites";
import {NotFound} from "./pages/not-found"
import { Category } from "./pages/category";
import { Register } from "./pages/register";
import { ProtectedRoute } from "./components/protected-route";
export const AppRoutes = ({user, tracks, tracksError, currentTrack, setCurrentTrack}) => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
      <Route path="/" element={<Main tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}> </Main>} />
        <Route path="/favorites" element={<Favorites tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}  />} />
        <Route path="/category/:id" element={<Category  tracks = {tracks}/>} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
//
