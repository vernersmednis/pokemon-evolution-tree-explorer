
import { Division } from '@/components/basic';
import { VerticalEvolutionChainNode } from '@/components/custom';
import type { VerticalEvolutionChainNodeProps } from './types';
import { treeStyles } from './styles';

const RecursiveNode: React.FC<VerticalEvolutionChainNodeProps> = ({ pokemon, depth = 1 }) => (
  <>
    <Division key={`${pokemon.id}-${depth}`} className={treeStyles.entryRow} style={{ display: 'flex', alignItems: 'center' }}>
      <Division className={treeStyles.pokemonContainer} >
        <VerticalEvolutionChainNode pokemon={pokemon} />
      </Division>
    </Division>
    <Division style={{ marginLeft: 32 }}>
      {pokemon.evolvesTo.map(evolution => (
        <RecursiveNode key={`${evolution.id}-${depth + 1}`} pokemon={evolution} depth={depth + 1} />
      ))}
    </Division>
  </>
);

export default RecursiveNode;
