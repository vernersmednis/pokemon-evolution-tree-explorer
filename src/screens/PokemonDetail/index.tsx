import React, { useEffect, useRef, useState } from "react";
import { Division } from "@/components/basic";
import {
  EvolutionChainNode,
  VerticalEvolutionChainNode,
} from "@/components/custom";
import { useParams } from "react-router-dom";
import { useGetEvolutionChain } from "@/hooks/pokemon/getEvolutionChain";

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: evolutionChain, isLoading, error } = useGetEvolutionChain(id || "");

  const [useVertical, setUseVertical] = useState(false);
  const verticalRef = useRef<HTMLDivElement>(null);

  //---

  let x = -1;

  useEffect(() => {
    const checkOverflow = () => {
      if (verticalRef.current) {
        const { scrollWidth } = verticalRef.current;
        const windowWidth = window.innerWidth; // Account for padding/margins
        if (scrollWidth !== 0 && x === -1) x = scrollWidth;
        if (x !== -1) setUseVertical(x > windowWidth);
        else setUseVertical(false);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [evolutionChain]);

  //---

  if (isLoading) return <Division>Loading evolution chain...</Division>;
  if (error) return <Division>Error loading evolution chain: {error.message}</Division>;
  if (!evolutionChain || evolutionChain.length === 0)
    return <Division>No evolution chain found</Division>;

  return (
    <Division className="">
      {/* Evolution Chain Container - Dynamic Overflow Detection */}
      <Division ref={verticalRef} className={`${useVertical ? "hidden" : ""} mt-8 px-4`}>
        {evolutionChain.map((pokemon, index) => (
          <EvolutionChainNode key={index} pokemon={pokemon} />
        ))}
      </Division>
      <Division className={`${useVertical ? "" : "hidden"} font-mono text-sm pl-0`}>
        {evolutionChain.map((pokemon) => (
          <VerticalEvolutionChainNode key={pokemon.id} pokemon={pokemon} />
        ))}
      </Division>
    </Division>
  );
};

export default PokemonDetail;
