import { PokemonCardCompact, VerticalEvolutionChainNode } from "@/components/custom";
import type { VerticalEvolutionChainNodeProps } from "./types";

const RecursiveNode = ({ pokemon }: VerticalEvolutionChainNodeProps) => (
  <>
    <div className="flex items-center mb-2">
      <div className="flex-1">
        <PokemonCardCompact pokemon={pokemon} />
      </div>
    </div>
    <div className="ml-8">
      {pokemon.evolvesTo.map((evolution) => (
        <VerticalEvolutionChainNode key={evolution.id} pokemon={evolution} />
      ))}
    </div>
  </>
);

export default RecursiveNode;
