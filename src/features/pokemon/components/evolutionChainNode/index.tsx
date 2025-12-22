import EvolutionChainNodeArrow from "../evolutionChainNodeArrow";
import PokemonCard from "../pokemonCard";
import type { EvolutionChainNodeProps } from "./types";

function EvolutionChainNode({ pokemon }: EvolutionChainNodeProps) {
  return (
    <div className="flex flex-col items-center">
      <PokemonCard pokemon={pokemon} />

      <div className={`flex ${(pokemon.evolvesTo?.length ?? 0) > 1 ? "gap-8 px-16" : ""} items-start`}>
        {(pokemon.evolvesTo ?? []).map((evolution) => (
          <div key={evolution.id} className="flex flex-col items-center">
            <EvolutionChainNodeArrow pokemon={evolution} />
            <EvolutionChainNode pokemon={evolution} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvolutionChainNode;
