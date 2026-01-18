import { getPokemon, getPokemonSpecies, getEvolutionChain } from '../pokemon.service';
import { api } from '@/api/api';
import {
  mockWurmpleApiResponse,
  mockWurmpleSpeciesResponse,
  mockWurmpleEvolutionChainResponse,
  mockPikachuApiResponse,
  mockPikachuSpeciesResponse,
  mockPichuEvolutionChainResponse,
} from '@/__mocks__/fixtures';

// Mock the api module
jest.mock('@/api/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

describe('Pokemon Service', () => {
  const mockApi = api as jest.Mocked<typeof api>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPokemon', () => {
    it('should return pokemon data successfully', async () => {
      mockApi.get.mockResolvedValue(mockPikachuApiResponse);

      const result = await getPokemon('pikachu');

      expect(mockApi.get).toHaveBeenCalledWith('/pokemon/pikachu');
      expect(result).toBe(mockPikachuApiResponse);
    });

    it('should handle errors from the API (404) (not found)', async () => {
      mockApi.get.mockRejectedValue(new Error('Not Found'));

      await expect(getPokemon('invalid-pokemon')).rejects.toThrow();
    });
  });

  describe('getPokemonSpecies', () => {
    it('should return pokemon species data successfully', async () => {
      mockApi.get.mockResolvedValue(mockPikachuSpeciesResponse);

      const result = await getPokemonSpecies('pikachu');

      expect(mockApi.get).toHaveBeenCalledWith('/pokemon-species/pikachu');
      expect(result).toBe(mockPikachuSpeciesResponse);
    });

    it('should handle errors from the API (404) (not found)', async () => {
      mockApi.get.mockRejectedValue(new Error('Species not found'));

      await expect(getPokemonSpecies('invalid-pokemon-species')).rejects.toThrow();
    });
  });

  describe('getEvolutionChain', () => {
    it('should return evolution chain data successfully', async () => {
      mockApi.get.mockResolvedValue(mockPichuEvolutionChainResponse);

      const result = await getEvolutionChain('10');

      expect(mockApi.get).toHaveBeenCalledWith('/evolution-chain/10');
      expect(result).toBe(mockPichuEvolutionChainResponse);
    });
    
    it('should return branching evolution chain data successfully', async () => {
      mockApi.get.mockResolvedValue(mockWurmpleEvolutionChainResponse);

      const result = await getEvolutionChain('135');

      expect(mockApi.get).toHaveBeenCalledWith('/evolution-chain/135');
      expect(result).toBe(mockWurmpleEvolutionChainResponse);
    });

    it('should handle errors from the API (404) (not found)', async () => {
      mockApi.get.mockRejectedValue(new Error('Evolution chain not found'));

      await expect(getEvolutionChain('999')).rejects.toThrow();
    });
  });
});

