import { render, screen } from '@testing-library/react'

import Board from './Board';

describe('Lesson 01', () => {
  describe('Board', () => {
    it('should have nine buttons', () => {
      render(<Board />);

      expect(screen.queryAllByRole('button')).toHaveLength(9);
    });

    it('should have nine buttons with the class name "square"', () => {
      render(<Board />);

      const buttons: HTMLElement[] = screen.queryAllByRole('button');
      expect(buttons).toHaveLength(9);

      buttons.forEach((button: HTMLElement) => {
        expect(button).toHaveClass('square');
      });
    });

    it('should have three rows with the class name "board-row"', () => {
      const BoardComponent = render(<Board />);

      const rows: NodeListOf<HTMLDivElement> = BoardComponent.container.querySelectorAll('div');

      expect(rows).toHaveLength(3);

      rows.forEach((row: HTMLDivElement) => {
        expect(row.classList.contains('board-row'));
      });
    });

    it('should have three rows that each hold three squares', () => {
      const BoardComponent = render(<Board />);

      const rows: NodeListOf<HTMLDivElement> = BoardComponent.container.querySelectorAll('div');

      expect(rows).toHaveLength(3);

      rows.forEach((row: HTMLDivElement) => {
        const squares: NodeListOf<HTMLButtonElement> = row.querySelectorAll('button');

        expect(squares).toHaveLength(3);

        squares.forEach((square: HTMLButtonElement) => {
          expect(square.classList.contains('square'));
        });
      });
    });

    it('should have nine squares labeled 1-9', () => {
      render(<Board />);

      const buttons: HTMLElement[] = screen.queryAllByRole('button');
      expect(buttons).toHaveLength(9);

      buttons.forEach((button: HTMLElement) => {
        expect(button).toHaveClass('square');
      });

      const buttonLabels = buttons.map((button: HTMLElement) => (
        button.textContent
      ));
      expect(buttonLabels.sort()).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    });
  });
});

describe('Lesson 02', () => {
  describe('Board', () => {
    it('lesson 2 test', () => {
    });
  });
});
