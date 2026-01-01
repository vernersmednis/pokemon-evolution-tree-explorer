import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import type { PokemonCardProps } from "./types";
import { typeColors } from "./styles";

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  // Format certain pokemon data
  const pokemonType = pokemon.types?.[0]?.type?.name || "Normal";
  const bgColor = typeColors[pokemonType] || typeColors["Normal"];
  const imageUrl =
    pokemon.sprites?.other?.["official-artwork"]?.front_default || "";

  return (
    <Card className="w-64" variant="pokeball-outline-secondary">
      <CardHeader>
        <Typography variant="caption">#{pokemon.id}</Typography>
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

        <Typography variant="caption" as="p">
          {pokemon.species?.name || pokemon.name}
        </Typography>
      </CardContent>

      <CardFooter>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col items-center">
            <Typography variant="caption" as="label">Height</Typography>
            <Typography variant="subtitle" as="span">{(pokemon.height / 10).toFixed(1)}m</Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant="caption" as="label">Weight</Typography>
            <Typography variant="subtitle" as="span">{(pokemon.weight / 10).toFixed(1)}kg</Typography>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
