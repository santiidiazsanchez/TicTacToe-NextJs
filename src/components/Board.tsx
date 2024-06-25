import React from 'react';
import Square from './Square';

type BoardProps = {
  squares: (string | null)[];
  onClick: (i: number) => void;
  isGameOver: boolean;
};

const Board: React.FC<BoardProps> = ({ squares, onClick, isGameOver }) => (
  <div className="grid grid-cols-3 gap-4 p-5 rounded bg-customPalette-secondary mb-10">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} isGameOver={isGameOver} />
    ))}
  </div>
);

export default Board;