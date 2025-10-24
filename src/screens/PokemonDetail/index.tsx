import { Division } from "@/components/basic";
import {
  EvolutionChainNode,
  VerticalEvolutionChainNode,
} from "@/components/custom";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetEvolutionChain } from "@/hooks/pokemon/getEvolutionChain";

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: evolutionChain,
    isLoading,
    error,
  } = useGetEvolutionChain(id || "");

  if (isLoading) return <Division>Loading evolution chain...</Division>;
  if (error)
    return <Division>Error loading evolution chain: {error.message}</Division>;
  if (!evolutionChain || evolutionChain.length === 0)
    return <Division>No evolution chain found</Division>;

  return (
    <Division className="">
      {/* Evolution Chain Container - Responsive Layout */}
      <Division className="md:hidden overflow-x-srcoll md:overflow-x-hidden font-mono text-sm pl-0">
        {evolutionChain.map((pokemon) => (
          <VerticalEvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </Division>
      <Division className="hidden md:block overflow-x-hidden md:overflow-x-scroll mt-8 px-4">
        {evolutionChain.map((pokemon, index) => (
          <EvolutionChainNode key={index} pokemon={pokemon} />
        ))}
      </Division>
    </Division>
  );
};

export default PokemonDetail;
