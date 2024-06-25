// app/components/ResetButton.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

type ResetButtonProps = {
  onClick: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => (
  <button
    className="mt-10 mb-5 font-bold p-5 bg-customPalette-secondary text-customPalette-text rounded"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faSync} />
  </button>
);

export default ResetButton;