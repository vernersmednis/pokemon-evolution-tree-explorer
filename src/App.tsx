import './App.css'
import Dashboard from '@/screens/dashboard'
import PokemonDetail from '@/screens/pokemonDetail'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Header, Footer, Heading, Paragraph, Division } from '@/components/basic'
import { Search } from '@/components/custom'
// QueryClientProvider is provided in main.tsx

function App() {

  // Wrapper component that forces remount of PokemonDetail when pathname changes
  const PokemonDetailWrapper: React.FC = () => {
    const location = useLocation();
    // using pathname as key forces React to remount the component whenever the URL changes
    return <PokemonDetail key={location.pathname} />;
  };

  return (
    <>
      {/* Header Section */}
      <Header variant="page">
        <Heading level={1} variant="display">Pokémon Evolution Tree Explorer</Heading>
        <Paragraph variant="tagline">Discover the evolutionary paths of your favorite Pokémon</Paragraph>
        <Search />
      </Header>

      {/* Main Content */}
      <Division variant="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pokemon/:id" element={<PokemonDetailWrapper />} />
          <Route path="/" element={<Navigate to='/dashboard' />} />
        </Routes>
      </Division>
      
      {/* Footer */}
      <Footer variant="page">
        <Paragraph variant="attribution">
          Data provided by <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>
        </Paragraph>
        <Paragraph variant="help">
          Click on any Pokémon in the evolution tree to explore its evolution line
        </Paragraph>
      </Footer>
    </>
  )
}

export default App
