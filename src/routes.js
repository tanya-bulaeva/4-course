import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import {Login } from "./pages/login";
import {Favorites } from "./pages/favorites";
import {NotFound} from "./pages/not-found"
import { Category } from "./pages/category";
import { Register } from "./pages/register";
import { ProtectedRoute } from "./components/protected-route";
export const AppRoutes = ({user, token,  tracksError, loading, selectedTrack, setSelectedTrack, setLoading}) => {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} loading = {loading} />}>
        <Route path="/" element={<Main tracksError={tracksError} user = {user} loading = {loading}  selectedTrack={selectedTrack} setSelectedTrack ={setSelectedTrack} setLoading={setLoading}> </Main>} />
        <Route path="/favorites" element={<Favorites  tracksError={tracksError} loading = {loading} />} />
        <Route path="/category/:id" element={<Category   tracksError={tracksError}  loading = {loading}  />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
