import { Outlet, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Search from "@/components/search";
import { Home } from "lucide-react";

function AppLayout() {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-col items-center sticky top-0 z-10 py-4 border-b border-gray-300 bg-white shadow-sm">
        <Typography as="h1" variant="pokeball-subtitle">
          Pokémon Evolution Tree Explorer
        </Typography>
        <div className="flex justify-center gap-2 w-full max-w-128">
          <Button variant="pokeball" size="icon" onClick={() => navigate("/dashboard")}>
            <Home />
          </Button>
          <Search className="w-full" />
        </div>
      </header>

      <div className="my-8 flex flex-col items-center flex-grow">
        <Outlet />
      </div>

      <footer className="text-center pt-8 pb-8 border-t-2 border-gray-400 text-base bg-gray-50">
        <Typography as="p" variant="caption">
          Data provided by{" "}
          <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
            PokéAPI
          </a>
        </Typography>
        <Typography as="p" variant="pokeball-caption">
          Click on any Pokémon in the evolution tree to explore its evolution line
        </Typography>
      </footer>
    </>
  );
}

export default AppLayout;
