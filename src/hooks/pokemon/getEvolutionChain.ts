import { getPokemonSpecies, getEvolutionChain, getPokemon } from "@/api/services/pokemon";
import { useQuery } from '@tanstack/react-query';
import type { Pokemon } from '@/types/pokemon';
import type { EvolutionChainNodePokemon } from '@/types/pokemonEvolutionChainNode';
import type { EvolutionChain, EvolutionChainNode } from '@/types/evolutionChain';
import type { PokemonSpecies } from '@/types/pokemonSpecies';
import type { AxiosResponse } from 'axios';

// Simple function to transform evolution chain to EvolutionChainNodePokemon[]
const transformEvolutionChain = async (chain: EvolutionChainNode): Promise<EvolutionChainNodePokemon[]> => {
  // Process the chain recursively
  const processChain = async (chainNode: EvolutionChainNode): Promise<EvolutionChainNodePokemon> => {
    // Get basic Pokemon data
    const pokemonResponse: AxiosResponse<Pokemon> = await getPokemon(chainNode.species.name);
    const pokemonData = pokemonResponse.data;
    
    // Transform evolvesTo recursively
    const evolvesTo: EvolutionChainNodePokemon[] = [];
    for (const evolution of chainNode.evolves_to) {
      evolvesTo.push(await processChain(evolution));
    }
    
    return {
      ...pokemonData,
      evolutionTrigger: chainNode.evolution_details?.[0]?.trigger?.name || undefined,
      evolutionCondition: chainNode.evolution_details?.[0]?.min_level ? `Level ${chainNode.evolution_details[0].min_level}` : undefined,
      evolvesTo
    };
  };
  
  // Return array with just the base Pokemon
  return [await processChain(chain)];
};

export const useGetEvolutionChain = (pokemonId: string) => {
  return useQuery({
    queryKey: ["evolutionChain", pokemonId],
    queryFn: async (): Promise<EvolutionChainNodePokemon[]> => {
      // Get the pokemon species to get the evolution chain URL
      const speciesResponse: AxiosResponse<PokemonSpecies> = await getPokemonSpecies(pokemonId);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      
      // Extract the evolution chain ID from the URL
      const evolutionChainId = evolutionChainUrl.split('/').slice(-2, -1)[0];
      
      // Fetch the evolution chain data
      const evolutionChainResponse: AxiosResponse<EvolutionChain> = await getEvolutionChain(evolutionChainId);
      
      // Transform to EvolutionChainNodePokemon[] format
      return await transformEvolutionChain(evolutionChainResponse.data.chain);
    },
    enabled: !!pokemonId,
  });
};