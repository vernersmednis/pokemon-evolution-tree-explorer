import { Division, Span, Heading, Paragraph, Label } from "@/components/basic";
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
    <Division className="border border-color-black rounded-3xl p-6 w-64">
      <Division variant="vertical-stack-between">
        <Span variant="id">#{pokemon.id}</Span>
        <Heading level={2} variant="section">
          {pokemon.name}
        </Heading>
      </Division>

      <Division variant="horizontal-stack-center">
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
      </Division>

      <Division variant="horizontal-stack-center">
        <Span variant="badge" className={bgColor}>
          {pokemonType}
        </Span>
      </Division>

      <Paragraph variant="caption">
        {pokemon.species?.name || pokemon.name}
      </Paragraph>

      <Division variant="horizontal-stack-between">
        <Division variant="vertical-stack-center">
          <Label variant="stat">Height</Label>
          <Span variant="stat-value">{(pokemon.height / 10).toFixed(1)}m</Span>
        </Division>
        <Division variant="vertical-stack-center">
          <Label variant="stat">Weight</Label>
          <Span variant="stat-value">{(pokemon.weight / 10).toFixed(1)}kg</Span>
        </Division>
      </Division>
    </Division>
  );
};

export default PokemonCard;
