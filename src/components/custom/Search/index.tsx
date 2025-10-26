
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Command, CommandInput, CommandList, CommandItem } from '@/components/ui/command';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchPokemon } from '@/hooks/pokemon/searchPokemon';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const { data: pokemonData, isLoading, error } = useSearchPokemon(searchTerm);
    
  const handleSearch = () => {
    setSearchTerm(inputValue.trim().toLowerCase());
  };

  // Navigate to Pokemon detail page when a Pokemon is found
  useEffect(() => {
    if (pokemonData?.data?.id && !isLoading && !error) {
      navigate(`/pokemon/${pokemonData.data.id}`);
    }
  }, [pokemonData, isLoading, error, navigate]);
    
  return (
    <div className="flex justify-center gap-2">
      <Input
        type="text"
        placeholder="Search for a Pokémon (e.g., pikachu, charizard)..."
        className="w-128"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button 
        className="flex justify-center items-center gap-1" 
        variant="destructive"
        onClick={handleSearch}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    </div>
  );
};

export default Search;
