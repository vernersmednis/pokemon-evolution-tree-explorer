import { api } from "@/api/api";
import type { Pokemon } from "@/types/pokemon";

export const getPokemon = (id: string) => {
  const response = api.get<Pokemon>(`/pokemon/${id}`);
  return response;
};

export const searchPokemon = (name: string) => {
  const response = api.get<Pokemon>(`/pokemon/${name}`);
  return response;
};

export const getPokemonSpecies = (id: string) => {
  const response = api.get(`/pokemon-species/${id}`);
  return response;
};

export const getEvolutionChain = (id: string) => {
  const response = api.get(`/evolution-chain/${id}`);
  return response;
};