
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const popularPokemon = [
    { name: "Sawk", type: "Fighting" },
    { name: "Seismitoad", type: "Water" },
    { name: "Gloom", type: "Grass" },
    { name: "Furret", type: "Normal" },
    { name: "Sentret", type: "Normal" },
    { name: "Charizard", type: "Fire" },
    { name: "Sandshrew", type: "Ground" },
    { name: "Moltres", type: "Fire" },
  ];

  const filteredPokemon = selectedType === "all" ? popularPokemon : popularPokemon.filter(p => p.type === selectedType);

  const types = ["all", ...new Set(popularPokemon.map(p => p.type))];

  return (

    <div className="flex flex-col gap-16">

      {/* Popular Pokemon Section */}
      <div className="w-128 flex flex-col items-center">
        <h2>Or try one of these popular Pokémon:</h2>
        <div className="mb-4">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {types.map(type => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-col gap-2">
          {filteredPokemon.map(pokemon => (
            <Button key={pokemon.name} className="flex-1" variant="secondary">
              {pokemon.name}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Tips Section */}
      <div>
        <h3>Tips:</h3>
        <ul>
          <li>
            <span>💡</span>
            You can search by Pokémon name or number (e.g., "25" for Pikachu)
          </li>
          <li>
            <span>💡</span>
            Use arrow keys to navigate suggestions, Enter to select
          </li>
          <li>
            <span>💡</span>
            Click on any Pokémon in the evolution tree to explore its line
          </li>
          <li>
            <span>💡</span>
            Some Pokémon have branching evolutions with different conditions
          </li>
        </ul>
      </div>

    </div>

  );
};

export default Dashboard;