import type { CompactPokemonCardProps } from './types';
import { typeColors } from './styles';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Typography } from '@/components/ui/typography';
import { Card, CardContent } from "@/components/ui/card";

const CompactPokemonCard = ({ pokemon, onCardClick }: CompactPokemonCardProps) => {
  const pokemonType = pokemon.types[0].type.name || 'Normal';
  const bgColor = typeColors[pokemonType];
  const imageUrl = pokemon.sprites.other!['official-artwork']!.front_default;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card 
          variant="pokeball-outline"
          className="cursor-pointer py-0"
          onClick={() => onCardClick(pokemon)}
        >
          <CardContent className="flex items-center gap-2 p-2">
            {/* Pokemon Image */}
            <img src={imageUrl} alt={pokemon.name} className="w-8 h-8 object-contain flex-shrink-0" />
            
            {/* Pokemon Name */}
            <Typography variant="caption" as="span" className="truncate">
              {pokemon.name}
            </Typography>
            
            {/* Type Badge */}
            <Badge className={bgColor}>
              {pokemonType}
            </Badge>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <Typography variant="caption" as="p" className="text-white">Click to view details</Typography>
      </TooltipContent>
    </Tooltip>
  );
};

export default CompactPokemonCard;
