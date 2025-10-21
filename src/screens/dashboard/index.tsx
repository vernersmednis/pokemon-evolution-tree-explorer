
import { Button, Division, Heading, Span, UnorderedList } from '@/components/basic';
import React from 'react';

const Dashboard: React.FC = () => {
  return (

    <Division className="flex flex-col gap-16">

      {/* Popular Pokemon Section */}
      <Division className="w-128 flex flex-col items-center">
        <Heading level={2} variant="section">Or try one of these popular Pokémon:</Heading>
        <Division className="w-full flex flex-col gap-2">
          <Division className="flex gap-2">
            <Button className="flex-1" variant="showPokemon">Sawk</Button>
            <Button className="flex-1" variant="showPokemon">Seismitoad</Button>
            <Button className="flex-1" variant="showPokemon">Gloom</Button>
            <Button className="flex-1" variant="showPokemon">Furret</Button>
          </Division>
          <Division className="flex gap-2">
            <Button className="flex-1" variant="showPokemon">Sentret</Button>
            <Button className="flex-1" variant="showPokemon">Charizard</Button>
            <Button className="flex-1" variant="showPokemon">Sandshrew</Button>
            <Button className="flex-1" variant="showPokemon">Moltres</Button>
          </Division>
        </Division>
      </Division>

      {/* Tips Section */}
      <Division>
        <Heading level={3} variant="section">Tips:</Heading>
        <UnorderedList variant="tips">
          <UnorderedList.ListItem>
            <Span>💡</Span>
            You can search by Pokémon name or number (e.g., "25" for Pikachu)
          </UnorderedList.ListItem>
          <UnorderedList.ListItem>
            <Span>💡</Span>
            Use arrow keys to navigate suggestions, Enter to select
          </UnorderedList.ListItem>
          <UnorderedList.ListItem>
            <Span>💡</Span>
            Click on any Pokémon in the evolution tree to explore its line
          </UnorderedList.ListItem>
          <UnorderedList.ListItem>
            <Span>💡</Span>
            Some Pokémon have branching evolutions with different conditions
          </UnorderedList.ListItem>
        </UnorderedList>
      </Division>

    </Division>

  );
};

export default Dashboard;