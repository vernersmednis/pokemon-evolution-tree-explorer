import { api } from "@/api/api";

export const getPokemon = (name: string) => {
  const response = api.get(`/pokemon/${name}`);
  return response;
};

export const getPokemonSpecies = (name: string) => {
  const response = api.get(`/pokemon-species/${name}`);
  return response;
};

export const getEvolutionChain = (id: string) => {
  const response = api.get(`/evolution-chain/${id}`);
  return response;
};
