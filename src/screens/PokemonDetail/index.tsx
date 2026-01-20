import { useLayoutEffect, useRef, useState, useMemo, useCallback } from "react";
import EvolutionChainNode  from "./evolutionChainNode";
import CompactEvolutionChainNode from "./compactEvolutionChainNode";
import { useParams } from "react-router-dom";
import { useGetEvolutionChain } from "@/hooks/pokemon/getEvolutionChain";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgressIndicator } from "@/components/ui/carousel";
import PokemonCard from "./pokemonCard";
import type { EvolutionChainNodePokemon } from "@/types/evolutionChainNodePokemon";

// Build DFS list and compute evolution numbers
const buildDFSListWithNumbers = (
  pokemon: EvolutionChainNodePokemon, depth = 1, branchIndex = 1
): EvolutionChainNodePokemon[] => {
  const evolutionNumber = `${branchIndex}.${depth}`;
  const pokemonWithNumber = { ...pokemon, evolutionNumber };
  const children = pokemon.evolvesTo.flatMap((child, index) =>
    buildDFSListWithNumbers(child, depth + 1, branchIndex + index)
  );
  return [pokemonWithNumber, ...children];
};

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: evolutionChain, isLoading, error } = useGetEvolutionChain(id);

  const [useVertical, setUseVertical] = useState(false);
  const verticalRef = useRef(null);

  // Dialog state for the compact card evolution carousel
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<EvolutionChainNodePokemon | null>(null);

  const handleCardClick = useCallback((pokemon: EvolutionChainNodePokemon) => {
    setSelectedPokemon(pokemon);
    setDialogOpen(true);
  }, []);

  const evolutionList = useMemo(() => evolutionChain?.flatMap(pokemon => buildDFSListWithNumbers(pokemon)), [evolutionChain]);
  const initialIndex = useMemo(() => evolutionList?.findIndex(p => p.id === selectedPokemon?.id) ?? -1, [evolutionList, selectedPokemon]);
  const evolutionLabels = useMemo(() => evolutionList?.map(p => p.evolutionNumber!), [evolutionList]);

  // Dynamic Overflow Detection for switching between mobile view and desktop view
  useLayoutEffect(() => {

    // We will use initialScrollWith (set later) for switching to vertical view
    // (otherwise using regular scrollWidth we would experience stuttering on resizing)
    let initialScrollWidth = -1;

    const checkOverflow = () => {
      if (verticalRef.current) {
        const { scrollWidth } = verticalRef.current;
        const windowWidth = window.innerWidth;
        if (scrollWidth !== 0 && initialScrollWidth === -1) initialScrollWidth = scrollWidth;
        if (initialScrollWidth !== -1 ) setUseVertical(initialScrollWidth > windowWidth);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [evolutionChain]);


  if (isLoading) return <div>Loading evolution chain...</div>;
  if (error) return <div>Error loading evolution chain: {error.message}</div>;

  return (
    <>
      {/* Evolution Chain Container - Dynamic Overflow Detection */}
      <div ref={verticalRef} className={`${useVertical ? "hidden" : ""} mt-8 px-4`}>
        {evolutionChain && evolutionChain.map((pokemon) => (
          <EvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={`${useVertical ? "" : "hidden"} font-mono text-sm pl-0`}>
        {evolutionChain && evolutionChain.map((pokemon) => (
          <CompactEvolutionChainNode key={pokemon.id} pokemon={pokemon} onCardClick={handleCardClick} />
        ))}
      </div>

      {/* Single shared dialog for all compact cards */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-fit h-fit">
          <DialogTitle className="sr-only">
            {selectedPokemon?.name} Evolution Chain
          </DialogTitle>
          <DialogDescription className="sr-only">
            Browse through the evolution chain of {selectedPokemon?.name}. Use the arrows to navigate between evolution stages.
          </DialogDescription>
          {selectedPokemon && evolutionList && (
            <Carousel
              key={selectedPokemon.id}
              orientation="vertical"
              opts={{
                startIndex: initialIndex,
              }}
            >
              <CarouselPrevious variant={"pokeball-ghost"} positioning={"secondary"} />
              <CarouselContent className="">
                {evolutionList.map(pokemon => (
                  <CarouselItem key={pokemon.id}>
                    <PokemonCard pokemon={pokemon} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext variant={"pokeball-ghost"} positioning={"secondary"} />
              <CarouselProgressIndicator labels={evolutionLabels} variant="pokeball" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PokemonDetail;
