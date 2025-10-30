import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text, Caption } from "@/components/ui/typography";
import type { PokemonCardProps } from "./types";
import { typeColors } from "./styles";

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  // Format certain pokemon data
  const pokemonType = pokemon.types?.[0]?.type?.name || "Normal";
  const bgColor = typeColors[pokemonType] || typeColors["Normal"];
  const imageUrl =
    pokemon.sprites?.other?.["official-artwork"]?.front_default || "";

  return (
    <Card variant="pokeball-outline-secondary" className="w-64">
      <CardHeader>
        <Caption weight="semibold" className="text-gray-600">#{pokemon.id}</Caption>
        <CardTitle className="text-left">
          {pokemon.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
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

        <Caption italic as="p" className="leading-relaxed text-gray-500 text-center">
          {pokemon.species?.name || pokemon.name}
        </Caption>
      </CardContent>

      <CardFooter>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col items-center">
            <Label className="text-xs font-semibold text-gray-700">Height</Label>
            <Text size="base" weight="bold" as="span">{(pokemon.height / 10).toFixed(1)}m</Text>
          </div>
          <div className="flex flex-col items-center">
            <Label className="text-xs font-semibold text-gray-700">Weight</Label>
            <Text size="base" weight="bold" as="span">{(pokemon.weight / 10).toFixed(1)}kg</Text>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
