import { useLayoutEffect, useRef, useState } from "react";
import { EvolutionChainNode, CompactEvolutionChainNode } from "@/components/custom";
import { useParams } from "react-router-dom";
import { useGetEvolutionChain } from "@/hooks/pokemon/getEvolutionChain";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: evolutionChain, isLoading, error } = useGetEvolutionChain(id || "");


  const [useVertical, setUseVertical] = useState(false);
  const verticalRef = useRef(null);
  const initialScrollWidthRef = useRef(-1);

  // Reset initial scroll width when evolution chain changes (new Pokemon)
  useLayoutEffect(() => {
    initialScrollWidthRef.current = -1;
    setUseVertical(false);
  }, []);

  // Dynamic Overflow Detection for switching between mobile view and desktop view
  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (verticalRef.current) {
        const { scrollWidth } = verticalRef.current;
        const windowWidth = window.innerWidth;
        if (scrollWidth !== 0 && initialScrollWidthRef.current === -1) 
          initialScrollWidthRef.current = scrollWidth;
        if (initialScrollWidthRef.current !== -1) 
          setUseVertical(initialScrollWidthRef.current > windowWidth);
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
    <>
      {/* Evolution Chain Container - Dynamic Overflow Detection */}
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
};

export default PokemonDetail;
