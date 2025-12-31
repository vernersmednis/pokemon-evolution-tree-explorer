import { getPokemon, getPokemonSpecies, getEvolutionChain } from '../pokemon.service';
import { api } from '@/api/api';

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
      const mockResponse = { data: { id: 25, name: 'pikachu' } };
      mockApi.get.mockResolvedValue(mockResponse);

      const result = await getPokemon('pikachu');

      expect(mockApi.get).toHaveBeenCalledWith('/pokemon/pikachu');
      expect(result).toEqual(mockResponse);
    });

    it('should handle errors from the API', async () => {
      const mockError = new Error('Pokemon not found');
      mockApi.get.mockRejectedValue(mockError);

      await expect(getPokemon('invalid-pokemon')).rejects.toThrow('Pokemon not found');
    });
  });

  describe('getPokemonSpecies', () => {
    it('should return pokemon species data successfully', async () => {
      const mockResponse = { data: { id: 25, name: 'pikachu' } };
      mockApi.get.mockResolvedValue(mockResponse);

      const result = await getPokemonSpecies('25');

      expect(mockApi.get).toHaveBeenCalledWith('/pokemon-species/25');
      expect(result).toEqual(mockResponse);
    });

    it('should handle errors from the API', async () => {
      const mockError = new Error('Species not found');
      mockApi.get.mockRejectedValue(mockError);

      await expect(getPokemonSpecies('99999')).rejects.toThrow('Species not found');
    });
  });

  describe('getEvolutionChain', () => {
    it('should return evolution chain data successfully', async () => {
      const mockResponse = { data: { id: 10, chain: {} } };
      mockApi.get.mockResolvedValue(mockResponse);

      const result = await getEvolutionChain('10');

      expect(mockApi.get).toHaveBeenCalledWith('/evolution-chain/10');
      expect(result).toEqual(mockResponse);
    });

    it('should handle errors from the API', async () => {
      const mockError = new Error('Evolution chain not found');
      mockApi.get.mockRejectedValue(mockError);

      await expect(getEvolutionChain('999')).rejects.toThrow('Evolution chain not found');
    });
  });
});
