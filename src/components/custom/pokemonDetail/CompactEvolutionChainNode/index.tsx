import { CompactPokemonCard } from "@/components/custom";
import type { CompactEvolutionChainNodeProps } from "./types";

const CompactEvolutionChainNode = ({ pokemon }: CompactEvolutionChainNodeProps) => (
  <>
    <div className="flex items-center mb-2">
      <div className="flex-1">
        <CompactPokemonCard pokemon={pokemon} />
      </div>
    </div>
    <div className="ml-8">
      {pokemon.evolvesTo.map((evolution) => (
        <CompactEvolutionChainNode key={evolution.id} pokemon={evolution} />
      ))}
    </div>
  </>
);

export default CompactEvolutionChainNode;
