import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <Card className="border-color-black rounded-3xl p-6 w-64">
      <CardHeader className="flex flex-col items-between p-0">
        <span className="text-sm font-semibold text-gray-600">#{pokemon.id}</span>
        <CardTitle className="text-left">
          {pokemon.name}
        </CardTitle>
      </CardHeader>

      <div className="flex flex-row justify-center">
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="flex flex-row justify-center">
        <Badge className={bgColor}>
          {pokemonType}
        </Badge>
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
    </Card>
  );
};

export default PokemonCard;
