
import { Input, Button, Division } from '@/components/basic';

const Search: React.FC = () => (
  <Division className="flex justify-center gap-2">
    <Input
      type="text"
      placeholder="Search for a Pokémon (e.g., pikachu, charizard)..."
      className="w-128"
    />
    <Button className="flex justify-center items-center gap-1" variant="search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Search
    </Button>
  </Division>
);

export default Search;
