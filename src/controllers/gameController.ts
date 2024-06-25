// app/controllers/gameController.ts
import { useState } from 'react';
import { initialGameState, calculateWinner, GameState } from '@/models/gameModel';

export const useGameController = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const handleClick = (i: number) => {
    const { history, stepNumber, xIsNext } = gameState;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.slice();
    const gameStatus = calculateWinner(squares);

    if (gameStatus.winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setGameState({
      history: newHistory.concat([squares]),
      stepNumber: newHistory.length,
      xIsNext: !xIsNext,
    });
  };

  const jumpTo = (step: number) => {
    setGameState((prevState) => ({
      ...prevState,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    }));
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  const current = gameState.history[gameState.stepNumber];
  const gameStatus = calculateWinner(current);

  let status;
  if (gameStatus.winner) {
    status = 'Winner: ' + gameStatus.winner;
  } else if (gameStatus.isDraw) {
    status = 'Tie';
  } else {
    status = 'Next player: ' + (gameState.xIsNext ? 'X' : 'O');
  }

  const isGameOver = !!gameStatus.winner || gameStatus.isDraw;

  return { gameState, handleClick, jumpTo, resetGame, status, current, isGameOver };
};