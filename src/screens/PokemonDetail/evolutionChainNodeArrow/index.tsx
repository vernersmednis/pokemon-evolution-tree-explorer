import { Typography } from '@/components/ui/typography';
import type { EvolutionChainNodeArrowProps } from './types';

const EvolutionChainNodeArrow = ({ pokemon }: EvolutionChainNodeArrowProps) => {

  return (
    <div className="flex items-center gap-4 my-4">
      {/* Arrow */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-16 bg-black"></div>
        <div className="text-2xl leading-none -mt-2">▼</div>
      </div>
      
      {/* Evolution Info */}
      {(pokemon.evolutionTrigger || pokemon.evolutionCondition) && (
        <div className="flex flex-col">
          {pokemon.evolutionTrigger && (
            <div className="bg-gray-100 rounded px-2 py-1">
              <Typography variant="caption">
                {pokemon.evolutionTrigger}
              </Typography>
            </div>
          )}
          {pokemon.evolutionCondition && (
            <div className="bg-gray-50 rounded px-2 py-1">
              <Typography variant="caption">
                {pokemon.evolutionCondition}
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EvolutionChainNodeArrow;