import { useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetEvolutionChain } from "@/hooks/pokemon/getEvolutionChain";
import CompactEvolutionChainNode from "@/features/pokemon/components/compactEvolutionChainNode";
import EvolutionChainNode from "@/features/pokemon/components/evolutionChainNode";

function PokemonDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: evolutionChain, isLoading, error } = useGetEvolutionChain(id || "");

  const [useVertical, setUseVertical] = useState(false);
  const verticalRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let initialScrollWidth = -1;

    const checkOverflow = () => {
      if (!verticalRef.current) return;

      const { scrollWidth } = verticalRef.current;
      const windowWidth = window.innerWidth;

      if (scrollWidth !== 0 && initialScrollWidth === -1) initialScrollWidth = scrollWidth;
      if (initialScrollWidth !== -1) setUseVertical(initialScrollWidth > windowWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [evolutionChain]);

  if (isLoading) return <div>Loading evolution chain...</div>;
  if (error) return <div>Error loading evolution chain: {error.message}</div>;
  if (!evolutionChain || evolutionChain.length === 0) return <div>No evolution chain found</div>;

  return (
    <>
      <div ref={verticalRef} className={`${useVertical ? "hidden" : ""} mt-8 px-4`}>
        {evolutionChain.map((pokemon) => (
          <EvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={`${useVertical ? "" : "hidden"} font-mono text-sm pl-0`}>
        {evolutionChain.map((pokemon) => (
          <CompactEvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default PokemonDetail;
