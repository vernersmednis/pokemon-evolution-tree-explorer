import type { Pokemon } from './pokemon';

// Enhanced Pokemon type specifically for evolution chain rendering
// Extends Pokemon and adds evolution-specific properties
export interface EvolutionChainNodePokemon extends Pokemon {
  // Evolution-specific properties
  evolutionTrigger?: string;
  evolutionCondition?: string;
  evolvesTo: EvolutionChainNodePokemon[]; // Always defined for evolution chains, can be empty array
}