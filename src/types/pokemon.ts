
// Pokemon interface that matches the PokeAPI response structure
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other?: {
      'official-artwork'?: {
        front_default?: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  species: {
    name: string;
  };
}