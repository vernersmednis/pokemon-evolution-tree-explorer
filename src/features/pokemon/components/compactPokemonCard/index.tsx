import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgressIndicator } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";
import { parentMap } from "@/hooks/pokemon/getEvolutionChain";
import type { EvolutionChainNodePokemon } from "@/types/evolutionChainNodePokemon";

import PokemonCard from "../pokemonCard";
import type { CompactPokemonCardProps } from "./types";
import { typeColors } from "./styles";

const findRoot = (pokemon: EvolutionChainNodePokemon) => {
  let currentPokemon = pokemon;
  while (parentMap.has(currentPokemon)) currentPokemon = parentMap.get(currentPokemon)!;
  return currentPokemon;
};

const buildDFSListWithNumbers = (
  pokemon: EvolutionChainNodePokemon,
  depth = 1,
  branchIndex = 1
): EvolutionChainNodePokemon[] => {
  const evolutionNumber = `${branchIndex}.${depth}`;
  const pokemonWithNumber = { ...pokemon, evolutionNumber };
  const children = pokemon.evolvesTo.flatMap((child, index) =>
    buildDFSListWithNumbers(child, depth + 1, branchIndex + index)
  );
  return [pokemonWithNumber, ...children];
};

function CompactPokemonCard({ pokemon }: CompactPokemonCardProps) {
  const pokemonType = pokemon.types?.[0]?.type?.name || "Normal";
  const bgColor = typeColors[pokemonType] || typeColors["Normal"];
  const imageUrl = pokemon.sprites?.other?.["official-artwork"]?.front_default || "";

  const [dialogOpen, setDialogOpen] = useState(false);

  const evolutionList = useMemo(() => buildDFSListWithNumbers(findRoot(pokemon)), [pokemon]);
  const initialIndex = useMemo(
    () => evolutionList.findIndex((p) => p.id === pokemon.id),
    [evolutionList, pokemon.id]
  );
  const evolutionLabels = useMemo(() => evolutionList.map((p) => p.evolutionNumber || ""), [evolutionList]);

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
              <img src={imageUrl} alt={pokemon.name} className="w-8 h-8 object-contain flex-shrink-0" />

              <Typography variant="caption" as="span" className="truncate">
                {pokemon.name}
              </Typography>

              <Badge className={bgColor}>{pokemonType}</Badge>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant="caption" as="p" className="text-white">
            Click to view details
          </Typography>
        </TooltipContent>
      </Tooltip>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-fit h-fit">
          <DialogTitle className="sr-only">{pokemon.name} Evolution Chain</DialogTitle>
          <DialogDescription className="sr-only">
            Browse through the evolution chain of {pokemon.name}. Use the arrows to navigate between evolution stages.
          </DialogDescription>
          <Carousel
            orientation="vertical"
            opts={{
              startIndex: initialIndex,
            }}
          >
            <CarouselPrevious variant="pokeball-ghost" positioning="secondary" />
            <CarouselContent>
              {evolutionList.map((p) => (
                <CarouselItem key={p.id}>
                  <PokemonCard pokemon={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext variant="pokeball-ghost" positioning="secondary" />
            <CarouselProgressIndicator labels={evolutionLabels} variant="pokeball" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CompactPokemonCard;
