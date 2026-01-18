import type { Pokemon } from '@/types/pokemon';

// ===== WURMPLE FAMILY (covers branching + multi-stage evolution) =====

export const mockWurmple: Pokemon = {
  id: 265,
  name: 'wurmple',
  height: 3,
  weight: 36,
  types: [{ type: { name: 'bug' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png',
      },
    },
  },
  species: { name: 'wurmple' },
};

export const mockSilcoon: Pokemon = {
  id: 266,
  name: 'silcoon',
  height: 6,
  weight: 100,
  types: [{ type: { name: 'bug' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png',
      },
    },
  },
  species: { name: 'silcoon' },
};

export const mockBeautifly: Pokemon = {
  id: 267,
  name: 'beautifly',
  height: 10,
  weight: 285,
  types: [{ type: { name: 'bug' } }, { type: { name: 'flying' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png',
      },
    },
  },
  species: { name: 'beautifly' },
};

export const mockCascoon: Pokemon = {
  id: 268,
  name: 'cascoon',
  height: 7,
  weight: 115,
  types: [{ type: { name: 'bug' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png',
      },
    },
  },
  species: { name: 'cascoon' },
};

export const mockDustox: Pokemon = {
  id: 269,
  name: 'dustox',
  height: 12,
  weight: 316,
  types: [{ type: { name: 'bug' } }, { type: { name: 'poison' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png',
      },
    },
  },
  species: { name: 'dustox' },
};

// ===== EDGE CASES FOR TESTING =====

export const mockPokemonWithNoTypes: Pokemon = {
  id: 998,
  name: 'typeless',
  height: 10,
  weight: 100,
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://example.com/pokemon.png',
      },
    },
  },
  types: [],
  species: { name: 'typeless' },
};
