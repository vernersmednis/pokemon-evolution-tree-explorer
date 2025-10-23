import { searchPokemon } from "@/api/services/pokemon";
import { useQuery } from '@tanstack/react-query';

export const useSearchPokemon = (name: string) => {
  return useQuery({
    queryKey: ["searchPokemon", name],
    queryFn: async () => await searchPokemon(name),
  });
};