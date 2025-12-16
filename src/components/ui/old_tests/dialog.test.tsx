import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from '../dialog';
import { Typography } from '../typography';

describe('Dialog component behavior', () => {
  
  describe('with DialogTrigger', () => {
    it('must render trigger content', async () => {
      const user = userEvent.setup();

      const { baseElement } = render(
        <Dialog>
          <DialogTrigger>Open dialog</DialogTrigger>
          <DialogHeader>
            <DialogTitle>Dex entry</DialogTitle>
            <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
          </DialogHeader>
          <DialogContent showCloseButton={false}>
            <Typography>Template content</Typography>
          </DialogContent>
        </Dialog>
      );
      
      const trigger = baseElement.querySelector('[data-slot="dialog-trigger"]');
      await user.click(trigger!);

      const content = baseElement.querySelector('[data-slot="dialog-content"]');

      expect(content).toBeInTheDocument();
      expect(content?.children.length).toBeGreaterThan(0);
    });
  });

  describe('when showCloseButton is false', () => {

    it('must show only custom close button', async () => {
      const user = userEvent.setup();

      const { baseElement } = render(
        <Dialog>
          <DialogTrigger>Open dialog</DialogTrigger>
          <DialogHeader>
            <DialogTitle>Dex entry</DialogTitle>
            <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
          </DialogHeader>
          <DialogContent showCloseButton={false}>
            <Typography>Leaf energy restored.</Typography>
            <DialogClose asChild>
              <button type='button'>Dismiss</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      const trigger = baseElement.querySelector('[data-slot="dialog-trigger"]');
      await user.click(trigger!);

      const content = baseElement.querySelector('[data-slot="dialog-content"]');
      const dialogClose = baseElement.querySelectorAll('[data-slot="dialog-close"]');
      
      expect(trigger).toBeInTheDocument();
      expect(trigger?.innerHTML.length).toBeGreaterThan(0);
      expect(content).toBeInTheDocument();
      expect(content?.children.length).toBeGreaterThan(0);
      expect(dialogClose).toHaveLength(1);
      expect(dialogClose[0]).toBeInTheDocument();
      expect(dialogClose[0]).toHaveAttribute('type', 'button');
    });

    describe('when clicking the custom close button', () => {
      it('must close the dialog', async () => {
        const user = userEvent.setup();

        const { baseElement } = render(
          <Dialog>
            <DialogTrigger>Open dialog</DialogTrigger>
            <DialogHeader>
              <DialogTitle>Dex entry</DialogTitle>
              <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
            </DialogHeader>
            <DialogContent showCloseButton={false}>
              <Typography>Leaf energy restored.</Typography>
              <DialogClose asChild>
                <button type='button'>Dismiss</button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        );

        const trigger = baseElement.querySelector('[data-slot="dialog-trigger"]');
        await user.click(trigger!);
        const dialogClose = baseElement.querySelectorAll('[data-slot="dialog-close"]');
        const content = baseElement.querySelector('[data-slot="dialog-content"]');

        await user.click(dialogClose[0]);

        expect(content).not.toBeInTheDocument(); 
      });
    });
  });

  describe('with full composition', () => {
    it('must render all dialog sections with content', async () => {
      const user = userEvent.setup();

      const { baseElement } = render(
        <Dialog>
          <DialogTrigger>Inspect Pokemon</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dex entry</DialogTitle>
              <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
            </DialogHeader>
            <Typography>Leaf energy restored.</Typography>
            <DialogFooter>
              <DialogClose asChild>
                <button type='button'>Dismiss</button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      const trigger = baseElement.querySelector('[data-slot="dialog-trigger"]');
      await user.click(trigger!);

      const overlay = baseElement.querySelector('[data-slot="dialog-overlay"]');
      const content = baseElement.querySelector('[data-slot="dialog-content"]');
      const header = baseElement.querySelector('[data-slot="dialog-header"]');
      const footer = baseElement.querySelector('[data-slot="dialog-footer"]');
      const title = baseElement.querySelector('[data-slot="dialog-title"]');
      const description = baseElement.querySelector('[data-slot="dialog-description"]');
      const dialogClose = baseElement.querySelectorAll('[data-slot="dialog-close"]');

      expect(overlay).toBeInTheDocument();
      expect(trigger).toBeInTheDocument();
      expect(trigger?.innerHTML.length).toBeGreaterThan(0);
      expect(content).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(title?.innerHTML.length).toBeGreaterThan(0);
      expect(description).toBeInTheDocument();
      expect(description?.innerHTML.length).toBeGreaterThan(0);
      expect(content?.children.length).toBeGreaterThan(0);
      expect(footer).toBeInTheDocument();
      expect(dialogClose).toHaveLength(2);
      expect(dialogClose[0]).toBeInTheDocument();
      expect(dialogClose[1]).toBeInTheDocument();
      expect(dialogClose[0]).toHaveAttribute('type', 'button');
    });
        
    describe('when clicking the custom close button', () => {
      it('must close the dialog', async () => {
        const user = userEvent.setup();

        const { baseElement } = render(
          <Dialog>
            <DialogTrigger>Inspect Pokemon</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dex entry</DialogTitle>
                <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
              </DialogHeader>
              <Typography>Leaf energy restored.</Typography>
              <DialogFooter>
                <DialogClose asChild>
                  <button type='button'>Dismiss</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );

        const trigger = baseElement.querySelector('[data-slot="dialog-trigger"]');
        await user.click(trigger!);
        const dialogClose = baseElement.querySelectorAll('[data-slot="dialog-close"]');
        const content = baseElement.querySelector('[data-slot="dialog-content"]');

        await user.click(dialogClose[0]);

        expect(content).not.toBeInTheDocument(); 
      });
    });
    
    describe('when clicking the default close button', () => {
      it('must close the dialog', async () => {
        const user = userEvent.setup();

        const { baseElement } = render(
          <Dialog>
            <DialogTrigger>Inspect Pokemon</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dex entry</DialogTitle>
                <DialogDescription>Bulbasaur naps in the sun</DialogDescription>
              </DialogHeader>
              <Typography>Leaf energy restored.</Typography>
              <DialogFooter>
                <DialogClose asChild>
                  <button type='button'>Dismiss</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );

        const trigger = baseElement.querySelector('[data-slot="dialog-trigger"]');
        await user.click(trigger!);
        const dialogClose = baseElement.querySelectorAll('[data-slot="dialog-close"]');
        const content = baseElement.querySelector('[data-slot="dialog-content"]');

        await user.click(dialogClose[1]);

        expect(content).not.toBeInTheDocument(); 
      });
    });
  });
});
