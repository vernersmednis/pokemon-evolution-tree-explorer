import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip, TooltipTrigger, TooltipContent } from '../tooltip';
import React from 'react';

// Mock ResizeObserver for tooltip positioning
globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Tooltip', () => {
  const renderTooltip = () => render(
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  );

  it('renders tooltip trigger', () => {
    renderTooltip();
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('does not render tooltip content initially', () => {
    renderTooltip();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });


  describe('when hovered', () => {
    it('shows tooltip content on hover', async () => {
      const user = userEvent.setup();
      renderTooltip();

      await user.hover(screen.getByText('Hover me'));

      const tooltip = await screen.findByRole('tooltip');
      expect(tooltip).toBeInTheDocument();
      expect(tooltip).toHaveTextContent('Tooltip content');
    });

    it('hides tooltip content on unhover', async () => {
      const user = userEvent.setup();
      renderTooltip();

      const trigger = screen.getByText('Hover me');
      await user.hover(trigger);
      const tooltip = await screen.findByRole('tooltip');
      expect(tooltip).toBeInTheDocument();
      // Radix closes after a pointermove outside the grace area
      await user.pointer({ keys: '[MouseLeft]', coords: { clientX: 0, clientY: 0 } })

      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });
  });

  describe('TooltipContent sideOffset prop', () => {
    it('defaults to 0', async () => {
      const user = userEvent.setup();
      renderTooltip();

      await user.hover(screen.getByText('Hover me'));
      const tooltip = await screen.findByRole('tooltip');

      // Find the positioning wrapper (grandparent of the tooltip span)
      const wrapper = tooltip.parentElement?.parentElement as HTMLElement;
      const transform = wrapper.style.transform;

      // For sideOffset=0 with side="top", expect default offset (typically 0px or similar)
      expect(transform).toContain('translate(0px, 0px)');
    });

    it('accepts custom sideOffset', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent sideOffset={10}>Tooltip content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText('Hover me'));
      const tooltip = await screen.findByRole('tooltip');

      // Find the positioning wrapper (grandparent of the tooltip span)
      const wrapper = tooltip.parentElement?.parentElement as HTMLElement;
      const transform = wrapper.style.transform;

      // For sideOffset=10 with side="top", expect increased offset (e.g., -10px)
      expect(transform).toContain('translate(0px, -10px)');
    });
  });

});