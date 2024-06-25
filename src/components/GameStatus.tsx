import React from 'react';

const GameStatus = ({ status }: { status: String }) => {
  return (
    <div className="text-xl text-customPalette-text my-10 font-semibold">
      {status}
    </div>
  );
};

export default GameStatus;