
// Type definition for Pokemon data
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
  species: string;
  height: string;
  weight: string;
  evolutionTrigger?: string;
  evolutionCondition?: string;
  evolvesTo: Pokemon[];
}