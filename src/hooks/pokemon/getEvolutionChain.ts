import { getPokemonSpecies, getEvolutionChain, getPokemon } from "@/api/services/pokemon";
import { useQuery } from '@tanstack/react-query';
import type { EvolutionChainNodePokemon } from '@/types/evolutionChainNodePokemon';
import type { EvolutionChainNode } from '@/types/evolutionChain';

// WeakMap to store parent relationships without circular references
export const parentMap = new WeakMap();

// Simple function to transform evolution chain to EvolutionChainNodePokemon[]
const transformEvolutionChain = async (chain: EvolutionChainNode) => {
  // Process the chain recursively
  const processChain = async (chainNode: EvolutionChainNode, parent?: EvolutionChainNodePokemon) => {
    // Get basic Pokemon data
    const pokemonResponse = await getPokemon(chainNode.species.name);
    const pokemonData = pokemonResponse.data;
    
    // Create the current pokemon node (without evolvesTo first)
    const currentPokemon = {
      ...pokemonData,
      evolutionTrigger: chainNode.evolution_details?.[0]?.trigger?.name || undefined,
      evolutionCondition: chainNode.evolution_details?.[0]?.min_level ? `Level ${chainNode.evolution_details[0].min_level}` : undefined,
      evolvesTo: []
    };
    
    // Store parent relationship in WeakMap instead of on the object
    if (parent) {
      parentMap.set(currentPokemon, parent);
    }
    
    // Transform evolvesTo recursively, passing current pokemon as parent
    const evolvesTo = [];
    for (const evolution of chainNode.evolves_to) {
      evolvesTo.push(await processChain(evolution, currentPokemon));
    }
    
    // Update evolvesTo array
    currentPokemon.evolvesTo = evolvesTo;
    
    return currentPokemon;
  };
  
  // Return array with just the base Pokemon
  return [await processChain(chain)];
};

export const useGetEvolutionChain = (pokemonId: string) => {
  return useQuery({
    queryKey: ["evolutionChain", pokemonId],
    queryFn: async () => {
      // Get the pokemon species to get the evolution chain URL
      const speciesResponse = await getPokemonSpecies(pokemonId);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      
      // Extract the evolution chain ID from the URL
      const evolutionChainId = evolutionChainUrl.split('/').slice(-2, -1)[0];
      
      // Fetch the evolution chain data
      const evolutionChainResponse = await getEvolutionChain(evolutionChainId);
      
      // Transform to EvolutionChainNodePokemon[] format
      return await transformEvolutionChain(evolutionChainResponse.data.chain);
    },
    enabled: !!pokemonId,
  });
};