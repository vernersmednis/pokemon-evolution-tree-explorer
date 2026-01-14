import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
} from '../item';

describe('Item', () => {
  const renderFullItem = () => render(
    <Item>
      <ItemHeader>
        <span>Item Header</span>
      </ItemHeader>
      <ItemMedia variant="icon">
        <svg data-testid="icon" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Pokemon Evolution</ItemTitle>
        <ItemDescription>Track your Pokemon's growth</ItemDescription>
      </ItemContent>
      <ItemActions>
        <button type="button">View</button>
      </ItemActions>
      <ItemFooter>
        <span>Item Footer</span>
      </ItemFooter>
    </Item>
  );

  it('renders an item element', () => {
    render(<Item>Basic Item</Item>);
    expect(screen.getByText('Basic Item')).toBeInTheDocument();
  });

  describe('asChild prop', () => {
    it('defaults to false (renders as div)', () => {
      render(<Item>Default Child</Item>);
      const item = screen.getByText('Default Child').closest('[data-slot="item"]');
      expect(item?.tagName).toBe('DIV');
    });

    it('when false, renders as div', () => {
      render(<Item asChild={false}>Div Child</Item>);
      const item = screen.getByText('Div Child').closest('[data-slot="item"]');
      expect(item?.tagName).toBe('DIV');
    });

    it('when true, renders as child element', () => {
      render(<Item asChild><a href="/pokemon">Link Child</a></Item>);
      const item = screen.getByRole('link', { name: 'Link Child' });
      expect(item.tagName).toBe('A');
      expect(item).toHaveAttribute('href', '/pokemon');
    });
  });

  describe('ItemMedia variant prop', () => {
    it('defaults to default variant', () => {
      render(<ItemMedia>Default Media</ItemMedia>);
      const media = screen.getByText('Default Media').closest('[data-slot="item-media"]');
      expect(media).toHaveAttribute('data-variant', 'default');
    });

    it('accepts icon variant', () => {
      render(<ItemMedia variant="icon"><svg /></ItemMedia>);
      const media = document.querySelector('[data-slot="item-media"]');
      expect(media).toHaveAttribute('data-variant', 'icon');
    });
  });

  describe('full item rendering', () => {
    it('renders item with header', () => {
      renderFullItem();
      expect(screen.getByText('Item Header')).toBeInTheDocument();
    });

    it('renders item with media', () => {
      renderFullItem();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders item with title', () => {
      renderFullItem();
      expect(screen.getByText('Pokemon Evolution')).toBeInTheDocument();
    });

    it('renders item with description', () => {
      renderFullItem();
      expect(screen.getByText('Track your Pokemon\'s growth')).toBeInTheDocument();
    });

    it('renders item with actions', () => {
      renderFullItem();
      expect(screen.getByRole('button', { name: 'View' })).toBeInTheDocument();
    });

    it('renders item with footer', () => {
      renderFullItem();
      expect(screen.getByText('Item Footer')).toBeInTheDocument();
    });
  });
});

describe('ItemGroup', () => {
  it('renders a group with role list', () => {
    render(
      <ItemGroup>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </ItemGroup>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});

describe('ItemSeparator', () => {
  it('renders a group with a separator between items', () => {
    render(
      <ItemGroup>
        <Item>Item 1</Item>
        <ItemSeparator />
        <Item>Item 2</Item>
      </ItemGroup>
    );
    expect(document.querySelector('[data-slot="item-separator"]')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
