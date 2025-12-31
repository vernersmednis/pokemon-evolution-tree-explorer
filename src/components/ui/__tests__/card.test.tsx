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

  it('renders card root component', () => {
    renderFullCard();
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('renders card header component', () => {
    renderFullCard();
    expect(screen.getByTestId('card-header')).toBeInTheDocument();
  });

  it('renders card title component and content', () => {
    renderFullCard();
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByText('Team spotlight')).toBeInTheDocument();
  });

  it('renders card description component and content', () => {
    renderFullCard();
    expect(screen.getByTestId('card-description')).toBeInTheDocument();
    expect(screen.getByText('Rare catch summary')).toBeInTheDocument();
  });

  it('renders card action component and content', () => {
    renderFullCard();
    expect(screen.getByTestId('card-action')).toBeInTheDocument();
    expect(screen.getByText('Edit team')).toBeInTheDocument();
  });

  it('renders card content component and content', () => {
    renderFullCard();
    expect(screen.getByTestId('card-content')).toBeInTheDocument();
    expect(screen.getByText('Charizard · Pikachu · Blastoise')).toBeInTheDocument();
  });

  it('renders card footer component and content', () => {
    renderFullCard();
    expect(screen.getByTestId('card-footer')).toBeInTheDocument();
    expect(screen.getByText('Updated just now')).toBeInTheDocument();
  });
});
