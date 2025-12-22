import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "@/components/layout/app-layout";
import Dashboard from "@/features/dashboard";
import PokemonDetail from "@/features/pokemon/pages/pokemon-detail";

function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
