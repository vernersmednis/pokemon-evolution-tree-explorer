
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemDescription } from '@/components/ui/item';
import { Text, Caption } from '@/components/ui/typography';
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      
      {/* Hero Section */}
      <Card variant="pokeball" className="overflow-hidden">
        <CardHeader className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 gap-y-1">
          <Zap className="w-6 h-6 text-red-600" />
          <CardTitle className="text-2xl col-start-2">Featured Pokémon</CardTitle>
          <CardDescription className="col-span-2">Explore the most iconic Pokémon and their evolution chains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {featuredPokemon.map((pokemon) => (
              <Button
                key={pokemon.id}
                variant="pokeball-outline"
                className="h-auto py-4 flex-col gap-2"
                onClick={() => handlePokemonClick(pokemon.id)}
              >
                <Text size="lg" weight="bold" as="span">{pokemon.name}</Text>
                <Caption weight="medium" className="opacity-70">#{pokemon.id}</Caption>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Pokemon Section */}
      <Card variant="greatball" className="overflow-hidden">
        <CardHeader className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 gap-y-1">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          <CardTitle className="col-start-2">Recommended Evolution Chains</CardTitle>
          <CardDescription className="col-span-2">Curated Pokémon to explore interesting evolution paths</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {recommendedPokemon.map((pokemon) => (
              <Button
                key={pokemon.id}
                variant="greatball-ghost"
                className="h-auto py-4 grid grid-cols-[1fr_auto] grid-rows-2 gap-x-4 gap-y-2 items-start text-left"
                onClick={() => handlePokemonClick(pokemon.id)}
              >
                <Text size="lg" weight="bold" as="span">{pokemon.name}</Text>
                <Caption weight="medium" className="opacity-70">#{pokemon.id}</Caption>
                <Caption as="span" className="col-span-2">{pokemon.description}</Caption>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card variant="pokeball-ghost" className="overflow-hidden md:col-span-2">
        <CardHeader className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 gap-y-1">
          <Lightbulb className="w-6 h-6 text-red-600" />
          <CardTitle className="col-start-2">Tips & Tricks</CardTitle>
          <CardDescription className="col-span-2">Learn how to make the most of the Pokémon Evolution Explorer</CardDescription>
        </CardHeader>
        <CardContent>
          <ItemGroup className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Item key={index} variant="outline" size="default">
                  <ItemMedia variant="icon">
                    <Icon className="text-red-600" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{tip.title}</ItemTitle>
                    <ItemDescription>{tip.description}</ItemDescription>
                  </ItemContent>
                </Item>
              );
            })}
          </ItemGroup>
        </CardContent>
      </Card>

    </div>
  );
};

export default Dashboard;