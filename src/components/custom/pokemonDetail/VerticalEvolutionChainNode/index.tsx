import { Division } from "@/components/basic";
import { PokemonCardCompact, VerticalEvolutionChainNode } from "@/components/custom";
import type { VerticalEvolutionChainNodeProps } from "./types";

const RecursiveNode: React.FC<VerticalEvolutionChainNodeProps> = ({
  pokemon,
}) => (
  <>
    <Division className="flex items-center mb-2">
      <Division className="flex-1">
        <PokemonCardCompact pokemon={pokemon} />
      </Division>
    </Division>
    <Division className="ml-8">
      {pokemon.evolvesTo.map((evolution) => (
        <VerticalEvolutionChainNode key={evolution.id} pokemon={evolution} />
      ))}
    </Division>
  </>
);

export default RecursiveNode;
