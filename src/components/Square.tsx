import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

type SquareProps = {
  value: string | null;
  onClick: () => void;
  isGameOver: boolean;
};

const Square: React.FC<SquareProps> = ({ value, onClick, isGameOver }) => (
  <button
    className="w-20 h-20 rounded bg-customPalette-background text-customPalette-text border-gray-500 text-2xl font-bold flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
    onClick={onClick}
    disabled={isGameOver || value !== null}
  >
    {value === 'X' && <FontAwesomeIcon icon={faX} className="text-customPalette-text text-4xl" />}
    {value === 'O' && <FontAwesomeIcon icon={faCircle} className="text-customPalette-primary text-4xl" />}
  </button>
);

export default Square;