import React, { useLayoutEffect, useRef, useState } from "react";
import { EvolutionChainNode, VerticalEvolutionChainNode } from "@/components/custom";
import { useParams } from "react-router-dom";
import { useGetEvolutionChain } from "@/hooks/pokemon/getEvolutionChain";

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: evolutionChain, isLoading, error } = useGetEvolutionChain(id || "");


  const [useVertical, setUseVertical] = useState(false);
  const verticalRef = useRef<HTMLDivElement>(null);

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
  if (!evolutionChain || evolutionChain.length === 0) return <div>No evolution chain found</div>;

  return (
    <div className="">
      {/* Evolution Chain Container - Dynamic Overflow Detection */}
      <div ref={verticalRef} className={`${useVertical ? "hidden" : ""} mt-8 px-4`}>
        {evolutionChain.map((pokemon) => (
          <EvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={`${useVertical ? "" : "hidden"} font-mono text-sm pl-0`}>
        {evolutionChain.map((pokemon) => (
          <VerticalEvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;
