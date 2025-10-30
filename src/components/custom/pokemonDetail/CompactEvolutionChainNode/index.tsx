import { CompactPokemonCard } from "@/components/custom";
import { Caption } from "@/components/ui/typography";
import type { CompactEvolutionChainNodeProps } from "./types";

const CompactEvolutionChainNode = ({ 
  pokemon, 
  depth = 1, 
  branchIndex = 1 
}: CompactEvolutionChainNodeProps) => {
  const evolutionNumber = `${branchIndex}.${depth}`;

  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <Caption weight="semibold" className="text-gray-600 w-12 text-right">
          {evolutionNumber}
        </Caption>
        <div className="flex-1">
          <CompactPokemonCard pokemon={pokemon} />
        </div>
      </div>
      <div className="ml-8">
        {pokemon.evolvesTo.map((evolution, index) => (
          <CompactEvolutionChainNode 
            key={evolution.id} 
            pokemon={evolution} 
            depth={depth + 1}
            branchIndex={branchIndex + index}
          />
        ))}
      </div>
    </>
  );
};

export default CompactEvolutionChainNode;
