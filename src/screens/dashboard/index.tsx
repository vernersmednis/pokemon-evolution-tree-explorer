
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Lightbulb, Zap, Search as SearchIcon, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const featuredPokemon = [
    { name: 'Charizard', id: 6 },
    { name: 'Pikachu', id: 25 },
    { name: 'Mewtwo', id: 150 },
    { name: 'Eevee', id: 133 },
  ];

  const recommendedPokemon = [
    { name: 'Bulbasaur', id: 1, description: 'Start your journey with the Grass starter' },
    { name: 'Squirtle', id: 7, description: 'Discover the Water-type evolution line' },
    { name: 'Wurmple', id: 265, description: 'Explore a branching evolution' },
    { name: 'Eevee', id: 133, description: 'See Eevee\'s very complex evolution' },
  ];

  const tips = [
    {
      icon: SearchIcon,
      title: 'Search by Name or Number',
      description: 'You can search by Pokémon name or number (e.g., "25" for Pikachu)',
    },
    {
      icon: Zap,
      title: 'Explore Evolution Chains',
      description: 'Click on any Pokémon in the evolution tree to explore its complete line',
    },
    {
      icon: TrendingUp,
      title: 'Branching Evolutions',
      description: 'Some Pokémon have multiple evolution paths with different conditions',
    },
    {
      icon: Lightbulb,
      title: 'Detailed Information',
      description: 'View stats, types, and evolution details for each Pokémon',
    },
  ];

  const handlePokemonClick = (id: number) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto px-4">
      
      {/* Hero Section */}
      <Card variant="pokeball" className="overflow-hidden">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-red-600" />
            <CardTitle className="text-2xl">Featured Pokémon</CardTitle>
          </div>
          <CardDescription>Explore the most iconic Pokémon and their evolution chains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredPokemon.map((pokemon) => (
              <Button
                key={pokemon.id}
                variant="pokeball-outline"
                className="h-auto py-4 flex-col gap-2"
                onClick={() => handlePokemonClick(pokemon.id)}
              >
                <span className="font-bold text-lg">{pokemon.name}</span>
                <span className="text-xs opacity-70">#{pokemon.id}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Pokemon Section */}
      <Card variant="greatball" className="overflow-hidden">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <CardTitle className="text-2xl">Recommended Evolution Chains</CardTitle>
          </div>
          <CardDescription>Curated Pokémon to explore interesting evolution paths</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendedPokemon.map((pokemon) => (
              <Button
                key={pokemon.id}
                variant="greatball-ghost"
                className="h-auto py-4 flex-col gap-2 items-start text-left"
                onClick={() => handlePokemonClick(pokemon.id)}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-lg">{pokemon.name}</span>
                  <span className="text-xs opacity-70">#{pokemon.id}</span>
                </div>
                <span className="text-xs font-normal">{pokemon.description}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-red-600" />
          <h3 className="text-xl font-semibold">Tips & Tricks</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index} variant="pokeball-ghost">
                <CardContent className="flex gap-3 items-start">
                  <Icon className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;