import type { EvolutionChainNodePokemon } from '@/types/evolutionChainNodePokemon';

export interface CompactPokemonCardProps {
  pokemon: EvolutionChainNodePokemon;
  onCardClick: (pokemon: EvolutionChainNodePokemon) => void;
}
