import React from 'react';

const GameStatus = ({ status }: { status: String }) => {
  return (
    <div className="text-xl text-customPalette-text mt-10 mb-5 font-semibold">
      {status}
    </div>
  );
};

export default GameStatus;