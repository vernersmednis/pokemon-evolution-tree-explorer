import type { CompactPokemonCardProps } from './types';
import { typeColors } from './styles';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgressIndicator } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Typography } from '@/components/ui/typography';
import { Card, CardContent } from "@/components/ui/card";
import PokemonCard from '../pokemonCard';
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
          <Card 
            variant="pokeball-outline"
            className="cursor-pointer py-0"
            onClick={() => setDialogOpen(true)}
          >
            <CardContent className="flex items-center gap-2 p-2">
              {/* Pokemon Image */}
              <img src={imageUrl} alt={pokemon.name} className="w-8 h-8 object-contain flex-shrink-0" />
              
              {/* Pokemon Name */}
              <Typography variant="caption" as="span" className="truncate">
                {pokemon.name}
              </Typography>
              
              {/* Type Badge */}
              <Badge className={bgColor}>
                {pokemonType}
              </Badge>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant="caption" as="p" className="text-white">Click to view details</Typography>
        </TooltipContent>
      </Tooltip>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-fit h-fit">
          <DialogTitle className="sr-only">
            {pokemon.name} Evolution Chain
          </DialogTitle>
          <DialogDescription className="sr-only">
            Browse through the evolution chain of {pokemon.name}. Use the arrows to navigate between evolution stages.
          </DialogDescription>
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
