import type { Pokemon } from './pokemon';

// Enhanced Pokemon type specifically for evolution chain rendering
// Extends Pokemon and adds evolution-specific properties
export interface EvolutionChainNodePokemon extends Pokemon {
  // Evolution-specific properties
  evolutionTrigger?: string;
  evolutionCondition?: string;
  evolutionNumber?: string; // Computed evolution index (e.g., "1", "2.1", "2.2")
  evolvesTo: EvolutionChainNodePokemon[]; // Always defined for evolution chains, can be empty array
  // Note: Parent relationships are stored in a WeakMap (see getEvolutionChain.ts) to avoid circular references
}