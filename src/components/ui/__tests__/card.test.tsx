import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '../card';
import { Typography } from '../typography';

describe('Card', () => {
  const renderFullCard = () => render(
    <Card>
      <CardHeader>
        <CardTitle>Team spotlight</CardTitle>
        <CardDescription>Rare catch summary</CardDescription>
        <CardAction>
          <button type='button'>Edit team</button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Typography>Charizard · Pikachu · Blastoise</Typography>
      </CardContent>
      <CardFooter>
        <Typography as="span" variant="caption">Updated just now</Typography>
      </CardFooter>
    </Card>
  );

  it('renders card with title component (and its text)', () => {
    renderFullCard();
    expect(screen.getByText('Team spotlight')).toBeInTheDocument();
  });

  it('renders card with description component (and its text)', () => {
    renderFullCard();
    expect(screen.getByText('Rare catch summary')).toBeInTheDocument();
  });

  it('renders card with action button (and its content)', () => {
    renderFullCard();
    expect(screen.getByRole('button', { name: 'Edit team' })).toBeInTheDocument();
  });

  it('renders card with content component (and its content)', () => {
    renderFullCard();
    expect(screen.getByText('Charizard · Pikachu · Blastoise')).toBeInTheDocument();
  });

  it('renders card with footer component (and its content)', () => {
    renderFullCard();
    expect(screen.getByText('Updated just now')).toBeInTheDocument();
  });
});
