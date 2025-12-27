import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
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

describe('Card component behavior', () => {

  // Helper to render `Card` with a full composition.
  const renderCard = () => {
    return render(
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
  };

  describe('when initialized', () => {
    beforeEach(() => {
      renderCard();
    });

    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    })

    it('must render card root component', () => {
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });

    it('must render card header component', () => {
      expect(screen.getByTestId('card-header')).toBeInTheDocument();
    });

    it('must render card title component', () => {
      expect(screen.getByTestId('card-title')).toBeInTheDocument();
    });

    it('must render card title content', () => {
      expect(screen.getByText('Team spotlight')).toBeInTheDocument();
    });

    it('must render card description component', () => {
      expect(screen.getByTestId('card-description')).toBeInTheDocument();
    });

    it('must render card description content', () => {
      expect(screen.getByText('Rare catch summary')).toBeInTheDocument();
    });

    it('must render card action component', () => {
      expect(screen.getByTestId('card-action')).toBeInTheDocument();
    });

    it('must render card action content', () => {
      expect(screen.getByText('Edit team')).toBeInTheDocument();
    });

    it('must render card content component', () => {
      expect(screen.getByTestId('card-content')).toBeInTheDocument();
    });

    it('must render card content content', () => {
      expect(screen.getByText('Charizard · Pikachu · Blastoise')).toBeInTheDocument();
    });

    it('must render card footer component', () => {
      expect(screen.getByTestId('card-footer')).toBeInTheDocument();
    });

    it('must render card footer content', () => {
      expect(screen.getByText('Updated just now')).toBeInTheDocument();
    });
  });
});
