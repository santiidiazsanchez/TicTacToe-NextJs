// app/views/Home.tsx
'use client';

import React from 'react';
import Board from '@/components/Board';
import Header from '@/components/Header';
import GameStatus from '@/components/GameStatus';
import ResetButton from '@/components/ResetButton';
import LinkButton from '@/components/LinkButton';
import { useGameController } from '@/controllers/gameController';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const { handleClick, status, current, resetGame, isGameOver } = useGameController();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customPalette-background">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className='flex items-center justify-between w-full px-5'>
          <GameStatus status={status} />
          <ResetButton onClick={resetGame} />
        </div>
        <Board squares={current} onClick={(i) => handleClick(i)} isGameOver={isGameOver} />
        <div className='flex items-center justify-between w-full px-5'>
          <LinkButton href="https://buymeacoffee.com/santidiazsanchez">
            <FontAwesomeIcon icon={faCoffee} /> &nbsp; Buy me a Coffee
          </LinkButton>
          <LinkButton href="https://github.com/santiidiazsanchez">
            <FontAwesomeIcon icon={faGithub} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
}