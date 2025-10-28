import './App.css'
import Dashboard from '@/screens/dashboard'
import PokemonDetail from '@/screens/pokemonDetail'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Search } from '@/components/custom'
// QueryClientProvider is provided in main.tsx

function App() {

  // Wrapper component that forces remount of PokemonDetail when pathname changes
  const PokemonDetailWrapper = () => {
    const location = useLocation();
    // using pathname as key forces React to remount the component whenever the URL changes
    return <PokemonDetail key={location.pathname} />;
  };
 
  return (
    <>
      {/* Header Section */}
      <header className="text-center sticky top-0 z-10 pt-8 pb-8 border-b border-gray-300 bg-white shadow-sm">
        <h1>Pokémon Evolution Tree Explorer</h1>
        <p className="leading-relaxed text-lg text-gray-600">Discover the evolutionary paths of your favorite Pokémon</p>
        <Search />
      </header>

      {/* Main Content */}
      <div className="my-8 flex flex-col items-center flex-grow">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pokemon/:id" element={<PokemonDetailWrapper />} />
          <Route path="/" element={<Navigate to='/dashboard' />} />
        </Routes>
      </div>
      
      {/* Footer */}
      <footer className="text-center pt-8 pb-8 border-t-2 border-gray-400 text-base bg-gray-50">
        <p className="leading-relaxed text-xs text-gray-600">
          Data provided by <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>
        </p>
        <p className="leading-relaxed text-sm text-red-400">
          Click on any Pokémon in the evolution tree to explore its evolution line
        </p>
      </footer>
    </>
  )
}

export default App
