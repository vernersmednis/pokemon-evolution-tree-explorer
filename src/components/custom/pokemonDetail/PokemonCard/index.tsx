import { Label } from "@/components/ui/label";
import type { PokemonCardProps } from "./types";
import { typeColors } from "./styles";
import React from "react";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  // Format certain pokemon data
  const pokemonType = pokemon.types?.[0]?.type?.name || "Normal";
  const bgColor = typeColors[pokemonType] || typeColors["Normal"];
  const imageUrl =
    pokemon.sprites?.other?.["official-artwork"]?.front_default || "";

  return (
    <div className="border border-color-black rounded-3xl p-6 w-64">
      <div className="flex flex-col items-between">
        <span className="text-sm font-semibold text-gray-600">#{pokemon.id}</span>
        <h2>
          {pokemon.name}
        </h2>
      </div>

      <div className="flex flex-row justify-center">
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="flex flex-row justify-center">
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${bgColor}`}>
          {pokemonType}
        </span>
      </div>

      <p className="leading-relaxed text-xs text-gray-500 italic">
        {pokemon.species?.name || pokemon.name}
      </p>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center">
          <Label className="text-xs font-semibold text-gray-700">Height</Label>
          <span className="font-bold text-base">{(pokemon.height / 10).toFixed(1)}m</span>
        </div>
        <div className="flex flex-col items-center">
          <Label className="text-xs font-semibold text-gray-700">Weight</Label>
          <span className="font-bold text-base">{(pokemon.weight / 10).toFixed(1)}kg</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
