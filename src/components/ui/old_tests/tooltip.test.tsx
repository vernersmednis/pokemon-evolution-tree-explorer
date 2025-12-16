import '@testing-library/jest-dom';

// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip, TooltipTrigger, TooltipContent } from '../tooltip';
import { Typography } from '../typography';

describe('Tooltip component behavior', () => {
  describe('when passing sideOffset prop', () => {
    it(`must be offset by 12px`, () => {
      const { baseElement } = render(
        <Tooltip open>
          <TooltipTrigger>Hover for rarity</TooltipTrigger>
          <TooltipContent sideOffset={12}>Mythical spawn window</TooltipContent>
        </Tooltip>
      );

      const content = baseElement.querySelector('[data-slot="tooltip-content"]');
      expect(content).toBeInTheDocument();
      expect(content).toHaveProperty('sideOffset', '12'); //temporary command, doesn't actually work yet
    });
  });
  
  describe('with TooltipTrigger', () => {
    it('must render trigger content', async () => {
      const user = userEvent.setup();

      const { baseElement } = render(
        <Tooltip>
          <TooltipTrigger>Hover for rarity</TooltipTrigger>
          <TooltipContent sideOffset={12}>Mythical spawn window</TooltipContent>
        </Tooltip>
      );
      
      const trigger = baseElement.querySelector('[data-slot="tooltip-trigger"]');
      await user.hover(trigger!);

      const content = baseElement.querySelector('[data-slot="tooltip-content"]');

      expect(content).toBeInTheDocument();
      expect(content?.innerHTML.length).toBeGreaterThan(0);
    });
  });

  describe('with full composition', () => {
    it('must render all tooltip sections with content', () => {
      const { baseElement } = render(
        <Tooltip open>
          <TooltipTrigger>Check moveset</TooltipTrigger>
          <TooltipContent>
            <Typography>Solar Beam ready</Typography>
          </TooltipContent>
        </Tooltip>
      );

      const trigger = baseElement.querySelector('[data-slot="tooltip-trigger"]');
      const content = baseElement.querySelector('[data-slot="tooltip-content"]');
      const arrow = content?.querySelector('.bg-foreground.fill-foreground');

      expect(trigger).toBeInTheDocument();
      expect(trigger?.innerHTML.length).toBeGreaterThan(0);
      expect(content).toBeInTheDocument();
      expect(content?.children.length).toBeGreaterThan(0);
      expect(arrow).toBeInTheDocument();
    });
  });
});
