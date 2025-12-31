import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';
import { Typography } from '../typography';

describe('Dialog', () => {
  const renderFullDialog = (showCloseButton = false) => render(
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogHeader>
        <DialogTitle>Dex entry</DialogTitle>
        <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
      </DialogHeader>
      <DialogContent showCloseButton={showCloseButton}>
        <Typography>Template content</Typography>
        <DialogFooter>
          <DialogClose asChild>
            <button type="button">Dismiss</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  describe('initial state', () => {
    it('does not render dialog content initially', () => {
      renderFullDialog();
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
    });

    it('renders dialog trigger', () => {
      renderFullDialog();
      expect(screen.getByTestId('dialog-trigger')).toBeInTheDocument();
      expect(screen.getByText('Open dialog')).toBeInTheDocument();
    });

    it('renders dialog header components', () => {
      renderFullDialog();
      expect(screen.getByTestId('dialog-header')).toBeInTheDocument();
      expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
      expect(screen.getByText('Dex entry')).toBeInTheDocument();
      expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
      expect(screen.getByText('Bulbasaur naps in the sun')).toBeInTheDocument();
    });
  });

  describe('when opened', () => {
    it('renders dialog content when trigger is clicked', async () => {
      const user = userEvent.setup();
      renderFullDialog();

      await user.click(screen.getByTestId('dialog-trigger'));

      expect(await screen.findByTestId('dialog-content')).toBeInTheDocument();
      expect(screen.getByText('Template content')).toBeInTheDocument();
      expect(screen.getByTestId('dialog-footer')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
    });

    describe('closing behavior', () => {
      it('closes when custom close button is clicked', async () => {
        const user = userEvent.setup();
        renderFullDialog();

        await user.click(screen.getByTestId('dialog-trigger'));
        await screen.findByTestId('dialog-content');

        await user.click(screen.getByRole('button', { name: 'Dismiss' }));

        expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
      });
    });

    describe('showCloseButton prop', () => {
      it('shows only custom close button by default', async () => {
        const user = userEvent.setup();
        renderFullDialog(false);

        await user.click(screen.getByTestId('dialog-trigger'));
        await screen.findByTestId('dialog-content');

        expect(screen.getAllByTestId('dialog-close')).toHaveLength(1);
      });

      it('shows both default and custom close buttons when true', async () => {
        const user = userEvent.setup();
        renderFullDialog(true);

        await user.click(screen.getByTestId('dialog-trigger'));
        await screen.findByTestId('dialog-content');

        expect(screen.getAllByTestId('dialog-close')).toHaveLength(2);
      });

      it('closes when default close button is clicked', async () => {
        const user = userEvent.setup();
        renderFullDialog(true);

        await user.click(screen.getByTestId('dialog-trigger'));
        await screen.findByTestId('dialog-content');

        const closeButtons = screen.getAllByTestId('dialog-close');
        await user.click(closeButtons[1]); // Click the default close button

        expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
      });
    });
  });
});
