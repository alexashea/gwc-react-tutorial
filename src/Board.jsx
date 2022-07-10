import React from "react";
import { Square } from "./Square";

export const Board = () => {
  const renderSquare = (i) => {
    return <Square />;
  };

  const status = "Next player: X";

  return (
    <div data-testid="board">
      <div data-testid="status" className="status">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
