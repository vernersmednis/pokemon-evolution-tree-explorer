import { PokemonCard, EvolutionChainNodeArrow } from '@/components/custom';
import type { EvolutionChainNodeProps } from './types';



const EvolutionChainNode = ({ pokemon }: EvolutionChainNodeProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* Current Pokemon Card */}
      <PokemonCard pokemon={pokemon} />

      {/* Render evolutions if they exist */}
      <div className={`flex ${(pokemon.evolvesTo?.length ?? 0) > 1 ? 'gap-8 px-16' : ''} items-start`}>
        {(pokemon.evolvesTo ?? []).map((evolution) => (
          <div key={evolution.id} className="flex flex-col items-center">
              {/* Evolution Arrow */}
              <EvolutionChainNodeArrow pokemon={evolution} />
              {/* Recursive call for next evolution */}
              <EvolutionChainNode pokemon={evolution} />
          </div>
          ))}
      </div>
    </div>
  );
};

export default EvolutionChainNode;