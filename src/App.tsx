import './App.css'
import Dashboard from '@/screens/Dashboard'
import PokemonDetail from '@/screens/PokemonDetail'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer, Heading, Paragraph, Division } from '@/components/basic'
import { Search } from '@/components/custom'

function App() {
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
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pokemon/id" element={<PokemonDetail />} />
            <Route path="/" element={<Navigate to='/dashboard' />} />
          </Routes>
        </Router>
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
