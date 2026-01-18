import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useGetEvolutionChain } from '../getEvolutionChain';
import * as pokemonService from '@/api/services/pokemon';
import type { AxiosResponse, InternalAxiosRequestConfig, AxiosHeaders } from 'axios';
import {
  mockWurmpleApiResponse,
  mockSilcoonApiResponse,
  mockBeautiflyApiResponse,
  mockCascoonApiResponse,
  mockDustoxApiResponse,
  mockWurmpleSpeciesResponse,
  mockWurmpleEvolutionChainResponse,
  mockWurmpleEvolutionChainNode,
} from '@/__mocks__/fixtures';

// Mock the pokemon service
jest.mock('@/api/services/pokemon', () => ({
  getPokemon: jest.fn(),
  getPokemonSpecies: jest.fn(),
  getEvolutionChain: jest.fn(),
}));

const mockedPokemonService = pokemonService as jest.Mocked<typeof pokemonService>;

// Helper to create mock API responses with required Axios fields
const createAxiosResponse = <T,>(data: T): AxiosResponse<T> => ({
  data,
  status: 200,
  statusText: 'OK',
  headers: {} as AxiosHeaders,
  config: {
    headers: {} as AxiosHeaders,
  } as InternalAxiosRequestConfig,
});

// Wrap fixture data in AxiosResponse format
const mockWurmpleSpeciesResponseWrapped = createAxiosResponse(mockWurmpleSpeciesResponse.data);
const mockWurmpleEvolutionChainResponseWrapped = createAxiosResponse(mockWurmpleEvolutionChainResponse.data);
const mockWurmpleApiResponseWrapped = createAxiosResponse(mockWurmpleApiResponse.data);
const mockSilcoonApiResponseWrapped = createAxiosResponse(mockSilcoonApiResponse.data);
const mockBeautiflyApiResponseWrapped = createAxiosResponse(mockBeautiflyApiResponse.data);
const mockCascoonApiResponseWrapped = createAxiosResponse(mockCascoonApiResponse.data);
const mockDustoxApiResponseWrapped = createAxiosResponse(mockDustoxApiResponse.data);

// Create a wrapper with QueryClientProvider
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Disable retries in tests
        gcTime: 0,    // Don't cache data for longer than 0
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => ( 
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useGetEvolutionChain', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  }); 
  
  describe('API calls', () => {
    it('should call getPokemonSpecies on hook call', async () => {
      mockedPokemonService.getPokemonSpecies.mockResolvedValue(mockWurmpleSpeciesResponseWrapped);
      mockedPokemonService.getEvolutionChain.mockResolvedValue(mockWurmpleEvolutionChainResponseWrapped);
      mockedPokemonService.getPokemon.mockResolvedValue(mockWurmpleApiResponseWrapped);

      renderHook(() => useGetEvolutionChain('wurmple'), {
        wrapper: createWrapper(),
      });

      await waitFor(() => 
        expect(mockedPokemonService.getPokemonSpecies).toHaveBeenCalledWith('wurmple')
      );
    });

    it('should call getEvolutionChain with corresponding evolution chain ID of pokemon species', async () => {
      mockedPokemonService.getPokemonSpecies.mockResolvedValue(mockWurmpleSpeciesResponseWrapped);
      mockedPokemonService.getEvolutionChain.mockResolvedValue(mockWurmpleEvolutionChainResponseWrapped);
      mockedPokemonService.getPokemon.mockResolvedValue(mockWurmpleApiResponseWrapped);

      renderHook(() => useGetEvolutionChain('wurmple'), {
        wrapper: createWrapper(),
      }); 

      // Evolution chain ID should be extracted from URL: https://pokeapi.co/api/v2/evolution-chain/135/
      await waitFor(() => 
        expect(mockedPokemonService.getEvolutionChain).toHaveBeenCalledWith(
          mockWurmpleSpeciesResponseWrapped.data.evolution_chain.url.split('/').slice(-2, -1)[0]
        )
      );
    }); 

    it('should call getPokemon for each Pokemon in a branched evolution chain', async () => {
      mockedPokemonService.getPokemonSpecies.mockResolvedValue(mockWurmpleSpeciesResponseWrapped);
      mockedPokemonService.getEvolutionChain.mockResolvedValue(mockWurmpleEvolutionChainResponseWrapped);
      mockedPokemonService.getPokemon
        .mockResolvedValueOnce(mockWurmpleApiResponseWrapped)
        .mockResolvedValueOnce(mockSilcoonApiResponseWrapped)
        .mockResolvedValueOnce(mockBeautiflyApiResponseWrapped)
        .mockResolvedValueOnce(mockCascoonApiResponseWrapped)
        .mockResolvedValueOnce(mockDustoxApiResponseWrapped);

      renderHook(() => useGetEvolutionChain('wurmple'), {
        wrapper: createWrapper(),
      });

      // Should call getPokemon for each Pokemon in the chain
      await waitFor(() => {
        expect(mockedPokemonService.getPokemon).toHaveBeenNthCalledWith(
          1,
          mockWurmpleEvolutionChainResponseWrapped.data.chain.species.name
        );
        expect(mockedPokemonService.getPokemon).toHaveBeenNthCalledWith(
          2,
          mockWurmpleEvolutionChainResponseWrapped.data.chain.evolves_to[0].species.name
        );
        expect(mockedPokemonService.getPokemon).toHaveBeenNthCalledWith(
          3,
          mockWurmpleEvolutionChainResponseWrapped.data.chain.evolves_to[0].evolves_to[0].species.name
        );
        expect(mockedPokemonService.getPokemon).toHaveBeenNthCalledWith(
          4,
          mockWurmpleEvolutionChainResponseWrapped.data.chain.evolves_to[1].species.name
        );
        expect(mockedPokemonService.getPokemon).toHaveBeenNthCalledWith(
          5,
          mockWurmpleEvolutionChainResponseWrapped.data.chain.evolves_to[1].evolves_to[0].species.name
        );
      });
    });
  });

  describe('successful data fetching', () => {
    it('should fetch and transform a branched evolution chain', async () => {
      // Setup mocks for Wurmple -> Silcoon/Cascoon -> Beautifly/Dustox chain
      mockedPokemonService.getPokemonSpecies.mockResolvedValue(mockWurmpleSpeciesResponseWrapped);
      mockedPokemonService.getEvolutionChain.mockResolvedValue(mockWurmpleEvolutionChainResponseWrapped);
      mockedPokemonService.getPokemon
        .mockResolvedValueOnce(mockWurmpleApiResponseWrapped)
        .mockResolvedValueOnce(mockSilcoonApiResponseWrapped)
        .mockResolvedValueOnce(mockBeautiflyApiResponseWrapped)
        .mockResolvedValueOnce(mockCascoonApiResponseWrapped)
        .mockResolvedValueOnce(mockDustoxApiResponseWrapped);

      const { result } = renderHook(() => useGetEvolutionChain('wurmple'), {
        wrapper: createWrapper(),
      });

      // Initially loading
      expect(result.current.isLoading).toBe(true);

      // Wait for data
      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      // Verify the chain structure
      const chain = result.current.data;
      expect(chain).toStrictEqual([mockWurmpleEvolutionChainNode]);
    });
  });

  describe('loading and error states', () => {
    it('should return loading state initially', () => {
      mockedPokemonService.getPokemonSpecies.mockImplementation(
        () => new Promise(() => {}) // Never resolves
      );

      const { result } = renderHook(() => useGetEvolutionChain('wurmple'), {
        wrapper: createWrapper(),
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();
    });

    it('should return error state when entered invalid data (404)', async () => {
      mockedPokemonService.getPokemonSpecies.mockRejectedValue(new Error('Pokemon species not found'));

      const { result } = renderHook(() => useGetEvolutionChain('invalid-pokemon-species'), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isError).toBe(true));

      expect(result.current.error).toBeDefined();
      expect(result.current.error?.message).toBe('Pokemon species not found');
    });
  });

  describe('query configuration', () => {
    it('should not fetch when pokemonName is empty', () => {
      const { result } = renderHook(() => useGetEvolutionChain(''), {
        wrapper: createWrapper(),
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.isFetching).toBe(false);
      expect(mockedPokemonService.getPokemonSpecies).not.toHaveBeenCalled();
    });
  });
});
