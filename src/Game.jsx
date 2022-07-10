import React from "react";
import { Board } from "./Board";

export const Game = () => {
  return (
    <div data-testid="game" className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
