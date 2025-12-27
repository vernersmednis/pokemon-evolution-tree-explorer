import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
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

describe('Dialog component behavior', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  // Helper to render `Dialog` with a full composition.
  const renderDialog = (options: {
    showCloseButton?: boolean;
  } = {}) => {

    return render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogHeader>
          <DialogTitle>Dex entry</DialogTitle>
          <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
        </DialogHeader>
        <DialogContent showCloseButton={options.showCloseButton}>
          <Typography>Template content</Typography>
          <DialogFooter>
            <DialogClose asChild>
              <button type="button">Dismiss</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  describe('when initialized with full composition', () => {
    const defaultOptions = {};
    let currentOptions = defaultOptions;

    beforeEach(() => {
      renderDialog(currentOptions);
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('must not render dialog content before opening', () => {
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
    });

    it('must render dialog trigger component', () => {
      expect(screen.getByTestId('dialog-trigger')).toBeInTheDocument();
    });

    it('must render dialog trigger content', () => {
      expect(screen.getByText('Open dialog')).toBeInTheDocument();
    });
    
    it('must render dialog header component', () => {
      expect(screen.getByTestId('dialog-header')).toBeInTheDocument();
    });
    
    it('must render dialog title component', () => {
      expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
    });

    it('must render dialog title content', () => {
      expect(screen.getByText('Dex entry')).toBeInTheDocument();
    });
    
    it('must render dialog description component', () => {
      expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
    });

    it('must render dialog description content', () => {
      expect(screen.getByText('Bulbasaur naps in the sun')).toBeInTheDocument();
    });

    describe('when opening the dialog (when clicking on the dialog trigger)', () => {
      beforeEach(async () => {
        await user.click(screen.getByTestId('dialog-trigger'));
      });

      it('must render dialog content component', async () => {
        expect(await screen.findByTestId('dialog-content')).toBeInTheDocument();
      });

      it('must render dialog content content', () => {
        expect(screen.getByText('Template content')).toBeInTheDocument();
      });

      it('must render dialog footer component', () => {
        expect(screen.getByTestId('dialog-footer')).toBeInTheDocument();
      });

      it('must render custom close button', () => {
        expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
      });

      describe('when clicking the custom close button', () => {
        beforeEach(async () => {
          await user.click(screen.getByRole('button', { name: 'Dismiss' }));
        });

        it('must close the dialog', () => {
          expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
        });
      });
      
      describe('when passing prop "showCloseButton"', () => {

        describe('when passing as "false" (default)', () => {
          beforeAll(() => {
            currentOptions = {
              showCloseButton: false,
            };
          });

          it('must render only one close button (custom)', () => {
            screen.findByTestId('dialog-content');
            expect(screen.getAllByTestId('dialog-close')).toHaveLength(1);
          });
        })

        describe('when passing as "true"', () => {
          beforeAll(() => {
            currentOptions = {
              showCloseButton: true,
            };
          });

          it('must render both close buttons (default + custom)', async () => {
            await screen.findByTestId('dialog-content');
            expect(screen.getAllByTestId('dialog-close')).toHaveLength(2);
          });

          describe('when clicking the default close button', () => {
            beforeEach(async () => {
              await user.click(screen.getAllByTestId('dialog-close')[1]);
            });

            it('must close the dialog', () => {
              expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
            });
          });
        });
      });
    });
  });
});
