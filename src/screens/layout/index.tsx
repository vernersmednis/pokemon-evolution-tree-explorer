import { useNavigate, Outlet } from "react-router-dom";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Search from "./search";
// QueryClientProvider is provided in main.tsx

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col items-center sticky top-0 z-10 py-4 border-b border-gray-300 bg-white shadow-sm">
        <Typography as="h1" variant="pokeball-subtitle">
          Pokémon Evolution Tree Explorer
        </Typography>
        <div className="flex justify-center gap-2 w-full max-w-128">
          <Button
            variant="pokeball"
            size="icon"
            onClick={() => navigate("/dashboard")}
          >
            <Home />
          </Button>
          <Search className="w-full" />
        </div>
      </header>

      {/* Header Section
      Alternative layout with grid. Didn't figure out how to implement this one yet. I will pick one later.
      */}
      {/* <header className=" sticky top-0 z-10 py-4 border-b border-gray-300 bg-white shadow-sm">
        <div className="grid grid-cols-[min-content_auto] grid-rows-[auto_min-content_auto] gap-2 px-2 max-w-128">
          <Typography as="h1" variant="pokeball-subtitle" className="col-span-2 row-start-1">
            Pokémon Evolution Tree Explorer
          </Typography>
          <Button 
            variant="pokeball" 
            size="icon"
            className="col-start-1 row-start-2"
            onClick={() => navigate("/dashboard")}
          >
            <Home />
          </Button>
          <Search className="w-full col-start-2 row-start-2" />
        </div>
      </header> */}

      {/* Main Content */}
      <div className="my-8 flex flex-col items-center flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="text-center pt-8 pb-8 border-t-2 border-gray-400 text-base bg-gray-50">
        <Typography as="p" variant="caption">
          Data provided by{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokéAPI
          </a>
        </Typography>
        <Typography as="p" variant="pokeball-caption">
          Click on any Pokémon in the evolution tree to explore its evolution
          line
        </Typography>
      </footer>
    </>
  );
}

export default Layout;
