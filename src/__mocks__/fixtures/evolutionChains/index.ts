import {
  mockWurmpleApiResponse,
  mockSilcoonApiResponse,
  mockBeautiflyApiResponse,
  mockCascoonApiResponse,
  mockDustoxApiResponse,
  mockPokemonWithNoTypesApiResponse
} from '../apiResponses';

// ===== WURMPLE FAMILY (covers branching + multi-stage evolution) =====

// Wurmple -> Silcoon/Cascoon -> Beautifly/Dustox
// This structure matches what useGetEvolutionChain hook returns (spreads full Pokemon API data)
export const mockWurmpleEvolutionChainNodePokemon = {
  ...mockWurmpleApiResponse.data,
  evolutionTrigger: undefined,
  evolutionCondition: undefined,
  evolvesTo: [
    {
      ...mockSilcoonApiResponse.data,
      evolutionTrigger: 'level-up',
      evolutionCondition: 'Level 7',
      evolvesTo: [
        {
          ...mockBeautiflyApiResponse.data,
          evolutionTrigger: 'level-up',
          evolutionCondition: 'Level 10',
          evolvesTo: [],
        },
      ],
    },
    {
      ...mockCascoonApiResponse.data,
      evolutionTrigger: 'level-up',
      evolutionCondition: 'Level 7',
      evolvesTo: [
        {
          ...mockDustoxApiResponse.data,
          evolutionTrigger: 'level-up',
          evolutionCondition: 'Level 10',
          evolvesTo: [],
        },
      ],
    },
  ],
};

// ===== EDGE CASES FOR TESTING =====

// Pokemon with no types, no evolutions
export const mockPokemonWithNoTypesEvolutionChainNodePokemon = {
  ...mockPokemonWithNoTypesApiResponse.data,
  evolutionTrigger: undefined,
  evolutionCondition: undefined,
  evolvesTo: [],
};