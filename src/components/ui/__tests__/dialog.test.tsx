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
  const renderFullDialog = (showCloseButton?: boolean) => render(
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
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders dialog trigger (and its content)', () => {
      renderFullDialog();
      expect(screen.getByRole('button', { name: 'Open dialog' })).toBeInTheDocument();
    });

    it('renders dialog title and description (and their content)', () => {
      renderFullDialog();
      expect(screen.getByRole('heading', { name: 'Dex entry' })).toBeInTheDocument();
      expect(screen.getByText('Bulbasaur naps in the sun')).toBeInTheDocument();
    });
  });

  describe('when opened', () => {
    it('renders dialog content when trigger is clicked', async () => {
      const user = userEvent.setup();
      renderFullDialog();

      await user.click(screen.getByRole('button', { name: 'Open dialog' }));

      expect(await screen.findByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Template content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
    });

    describe('closing behavior', () => {
      it('closes when custom close button is clicked', async () => {
        const user = userEvent.setup();
        renderFullDialog();

        await user.click(screen.getByRole('button', { name: 'Open dialog' }));
        await screen.findByRole('dialog');

        await user.click(screen.getByRole('button', { name: 'Dismiss' }));

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    describe('showCloseButton prop', () => {
      it('shows both default and custom close buttons by default', async () => {
        const user = userEvent.setup();
        renderFullDialog();

        await user.click(screen.getByRole('button', { name: 'Open dialog' }));
        await screen.findByRole('dialog');

        expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
      });

      it('shows only custom close button when false', async () => {
        const user = userEvent.setup();
        renderFullDialog(false);

        await user.click(screen.getByRole('button', { name: 'Open dialog' }));
        await screen.findByRole('dialog');

        expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
      });

      it('shows both default and custom close buttons when true', async () => {
        const user = userEvent.setup();
        renderFullDialog(true);

        await user.click(screen.getByRole('button', { name: 'Open dialog' }));
        await screen.findByRole('dialog');

        expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
      });

      it('closes when default close button is clicked', async () => {
        const user = userEvent.setup();
        renderFullDialog();

        await user.click(screen.getByRole('button', { name: 'Open dialog' }));
        await screen.findByRole('dialog');

        await user.click(screen.getByRole('button', { name: 'Close' }));

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });
  });
});
