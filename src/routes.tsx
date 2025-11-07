import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import PokemonDetail from "./screens/pokemonDetail";
import Layout from "./screens/layout";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
