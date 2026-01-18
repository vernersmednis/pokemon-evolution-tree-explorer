import { Search as SearchIcon, Zap, TrendingUp, Lightbulb } from 'lucide-react';

export const featuredPokemon = [
  { name: 'Charizard', id: 6 },
  { name: 'Pikachu', id: 25 },
  { name: 'Mewtwo', id: 150 },
  { name: 'Eevee', id: 133 },
];

export const recommendedPokemon = [
  { name: 'Bulbasaur', id: 1, description: 'Start your journey with the Grass starter' },
  { name: 'Squirtle', id: 7, description: 'Discover the Water-type evolution line' },
  { name: 'Wurmple', id: 265, description: 'Explore a branching evolution' },
  { name: 'Eevee', id: 133, description: 'See Eevee\'s very complex evolution' },
];

export const tips = [
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
