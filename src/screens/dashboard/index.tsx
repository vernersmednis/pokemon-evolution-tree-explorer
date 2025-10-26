
import { Button } from '@/components/ui/button';
import React from 'react';

const Dashboard: React.FC = () => {
  return (

    <div className="flex flex-col gap-16">

      {/* Popular Pokemon Section */}
      <div className="w-128 flex flex-col items-center">
        <h2>Or try one of these popular Pokémon:</h2>
        <div className="w-full flex flex-col gap-2">
          <div className="flex gap-2">
            <Button className="flex-1" variant="secondary">Sawk</Button>
            <Button className="flex-1" variant="secondary">Seismitoad</Button>
            <Button className="flex-1" variant="secondary">Gloom</Button>
            <Button className="flex-1" variant="secondary">Furret</Button>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1" variant="secondary">Sentret</Button>
            <Button className="flex-1" variant="secondary">Charizard</Button>
            <Button className="flex-1" variant="secondary">Sandshrew</Button>
            <Button className="flex-1" variant="secondary">Moltres</Button>
          </div>
        </div>
      </div>

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