// app/views/Home.tsx
'use client';

import React from 'react';
import Board from '@/components/Board';
import Header from '@/components/Header';
import GameStatus from '@/components/GameStatus';
import ResetButton from '@/components/ResetButton';
import LinkButton from '@/components/LinkButton';
import { useGameController } from '@/controllers/gameController';

export default function Home() {
  const { handleClick, status, current, resetGame, isGameOver } = useGameController();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customPalette-background">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <GameStatus status={status} />
        <Board squares={current} onClick={(i) => handleClick(i)} isGameOver={isGameOver} />
        <div>
          <ResetButton onClick={resetGame} />
          <LinkButton href="https://github.com" />
        </div>
      </div>
    </div>
  );
}