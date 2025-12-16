import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
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

  describe('with full composition', () => {
    it('must render all card sections with content', () => {
      const { baseElement } = render(
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

      const header = baseElement.querySelector('[data-slot="card-header"]');
      const title = baseElement.querySelector('[data-slot="card-title"]');
      const description = baseElement.querySelector('[data-slot="card-description"]');
      const action = baseElement.querySelector('[data-slot="card-action"]');
      const content = baseElement.querySelector('[data-slot="card-content"]');
      const footer = baseElement.querySelector('[data-slot="card-footer"]');
      
      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(title?.innerHTML.length).toBeGreaterThan(0);
      expect(description).toBeInTheDocument();
      expect(description?.innerHTML.length).toBeGreaterThan(0);
      expect(action).toBeInTheDocument();;
      expect(action?.children.length).toBeGreaterThan(0);
      expect(content).toBeInTheDocument();
      expect(content?.children.length).toBeGreaterThan(0);
      expect(footer).toBeInTheDocument();
      expect(footer?.children.length).toBeGreaterThan(0);
    });
  });
});
