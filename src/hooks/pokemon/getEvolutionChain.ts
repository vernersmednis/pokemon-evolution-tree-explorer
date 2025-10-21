import { getPokemonSpecies, getEvolutionChain, getPokemon } from "@/api/services/pokemon";
import { useQuery } from '@tanstack/react-query';
import type { Pokemon } from '@/types/pokemon';

// Simple function to transform evolution chain to Pokemon[]
const transformEvolutionChain = async (chain: any): Promise<Pokemon[]> => {
  // Process the chain recursively
  const processChain = async (chainNode: any): Promise<Pokemon> => {
    // Get basic Pokemon data
    const pokemonResponse: any = await getPokemon(chainNode.species.name);
    const pokemonData = pokemonResponse.data;
    
    // Transform evolvesTo recursively
    const evolvesTo: Pokemon[] = [];
    for (const evolution of chainNode.evolves_to) {
      evolvesTo.push(await processChain(evolution));
    }
    
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites?.other?.['official-artwork']?.front_default || '',
      type: pokemonData.types?.[0]?.type?.name || 'Unknown',
      species: pokemonData.species?.name || pokemonData.name,
      height: `${(pokemonData.height || 0) / 10}m`,
      weight: `${(pokemonData.weight || 0) / 10}kg`,
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
    queryFn: async (): Promise<Pokemon[]> => {
      // Get the pokemon species to get the evolution chain URL
      const speciesResponse: any = await getPokemonSpecies(pokemonId);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      
      // Extract the evolution chain ID from the URL
      const evolutionChainId = evolutionChainUrl.split('/').slice(-2, -1)[0];
      
      // Fetch the evolution chain data
      const evolutionChainResponse: any = await getEvolutionChain(evolutionChainId);
      
      // Transform to Pokemon[] format
      return await transformEvolutionChain(evolutionChainResponse.data.chain);
    },
    enabled: !!pokemonId,
  });
};