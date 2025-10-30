import type { CompactPokemonCardProps } from './types';
import { typeColors } from './styles';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgressIndicator } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Text } from '@/components/ui/typography';
import { PokemonCard } from '@/components/custom';
import { parentMap } from '@/hooks/pokemon/getEvolutionChain';
import { useState, useMemo } from 'react';
import type { EvolutionChainNodePokemon } from '@/types/evolutionChainNodePokemon';

// Helper functions for evolution tree traversal
const findRoot = (pokemon: EvolutionChainNodePokemon) => {
  while (parentMap.has(pokemon)) pokemon = parentMap.get(pokemon)!
  return pokemon
}

// Build DFS list and compute evolution numbers
const buildDFSListWithNumbers = (
  pokemon: EvolutionChainNodePokemon, depth = 1, branchIndex = 1
): EvolutionChainNodePokemon[] => {
  const evolutionNumber = `${branchIndex}.${depth}`;
  const pokemonWithNumber = { ...pokemon, evolutionNumber };
  const children = pokemon.evolvesTo.flatMap((child, index) =>
    buildDFSListWithNumbers(child, depth + 1, branchIndex + index)
  );
  return [pokemonWithNumber, ...children]
}

const CompactPokemonCard = ({ pokemon }: CompactPokemonCardProps) => {
  const pokemonType = pokemon.types?.[0]?.type?.name || 'Normal';
  const bgColor = typeColors[pokemonType] || typeColors['Normal'];
  const imageUrl = pokemon.sprites?.other?.['official-artwork']?.front_default || '';
  
  const [dialogOpen, setDialogOpen] = useState(false);

  // Build evolution list with numbers and find initial index
  const evolutionList = useMemo(() => buildDFSListWithNumbers(findRoot(pokemon)), [pokemon]);
  const initialIndex = useMemo(() => evolutionList.findIndex(p => p.id === pokemon.id), [evolutionList, pokemon.id]);
  const evolutionLabels = useMemo(() => evolutionList.map(p => p.evolutionNumber || ''), [evolutionList]);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg bg-white shadow-sm cursor-pointer" onClick={() => setDialogOpen(true)}>
            {/* Pokemon Image */}
            <img src={imageUrl} alt={pokemon.name} className="w-8 h-8 object-contain flex-shrink-0" />
            
            {/* Pokemon Name */}
            <Text size="sm" weight="medium" as="span" className="text-gray-800 truncate">
              {pokemon.name}
            </Text>
            
            {/* Type Badge */}
            <Badge className={bgColor}>
              {pokemonType}
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <Text size="sm" as="p">Click to view details</Text>
        </TooltipContent>
      </Tooltip>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-fit h-fit">
          <Carousel
            orientation="vertical"
            opts={{
              startIndex: initialIndex,
            }}
          >
              <CarouselPrevious variant={"pokeball-ghost"} positioning={"secondary"} />
              <CarouselContent className="">
                {evolutionList.map(pokemon => (
                  <CarouselItem key={pokemon.id} >
                    <PokemonCard pokemon={pokemon} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext variant={"pokeball-ghost"} positioning={"secondary"} />
              <CarouselProgressIndicator labels={evolutionLabels} variant="pokeball" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompactPokemonCard;
