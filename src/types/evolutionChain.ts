interface EvolutionDetail {
  trigger: {
    name: string;
  };
  min_level?: number;
  // Add other evolution detail properties as needed
}

export interface EvolutionChainNode {
  species: {
    name: string;
  };
  evolves_to: EvolutionChainNode[];
  evolution_details: EvolutionDetail[];
}

export interface EvolutionChain {
  chain: EvolutionChainNode;
  // Add other evolution chain properties as needed
}
