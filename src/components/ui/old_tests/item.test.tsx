import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemHeader, ItemFooter, ItemSeparator, ItemGroup } from '../item';

describe('Item component behavior', () => {
  describe('when passing asChild prop', () => {
    describe('as an anchor element', () => {
      it('must render as a clickable link', () => {
        const { baseElement } = render(
          <Item asChild>
            <a href="/pokedex">Open Pokedex</a>
          </Item>
        );

        const link = baseElement.querySelector('[data-slot="item"]');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/pokedex');
      });
    });
  });

  describe('with full composition', () => {
    it('must render all item sections with content', () => {
      const { baseElement } = render(
        <Item>
          <ItemMedia>🌱</ItemMedia>
          <ItemContent>
            <ItemHeader>
              <ItemTitle>Bulbasaur</ItemTitle>
              <ItemActions>
                <button>Use</button>
              </ItemActions>
            </ItemHeader>
            <ItemDescription>Seed Pokémon</ItemDescription>
            <ItemFooter>Gen I</ItemFooter>
          </ItemContent>
        </Item>
      );

      const media = baseElement.querySelector('[data-slot="item-media"]');
      const content = baseElement.querySelector('[data-slot="item-content"]');
      const title = baseElement.querySelector('[data-slot="item-title"]');
      const description = baseElement.querySelector('[data-slot="item-description"]');
      const actions = baseElement.querySelector('[data-slot="item-actions"]');
      const header = baseElement.querySelector('[data-slot="item-header"]');
      const footer = baseElement.querySelector('[data-slot="item-footer"]');

      expect(media).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(title?.innerHTML.length).toBeGreaterThan(0);
      expect(description).toBeInTheDocument();
      expect(description?.innerHTML.length).toBeGreaterThan(0);
      expect(actions).toBeInTheDocument();
      expect(actions?.children.length).toBeGreaterThan(0);
      expect(header).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });

  describe('group and separator behavior', () => {
    it('renders ItemGroup and ItemSeparator with expected roles/attributes', () => {
      const { baseElement } = render(
        <div>
          <ItemGroup>
            <Item>
              <ItemContent>
                <ItemTitle>Test</ItemTitle>
              </ItemContent>
            </Item>
          </ItemGroup>
          <ItemSeparator />
        </div>
      );

      const group = baseElement.querySelector('[data-slot="item-group"]');
      const separator = baseElement.querySelector('[data-slot="item-separator"]');

      expect(group).toBeInTheDocument();
      expect(group).toHaveAttribute('role', 'list');
      expect(group?.children.length).toBeGreaterThan(0);
      expect(separator).toBeInTheDocument();
    });
  });
});
