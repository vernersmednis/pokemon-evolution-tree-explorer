import type { EvolutionChainNodePokemon } from '@/types/evolutionChainNodePokemon';

export interface CompactEvolutionChainNodeProps {
  pokemon: EvolutionChainNodePokemon;
  depth?: number;
  branchIndex?: number;
}