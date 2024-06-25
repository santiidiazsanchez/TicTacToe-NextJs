// app/models/gameModel.ts
export type GameState = {
  history: (string | null)[][];
  stepNumber: number;
  xIsNext: boolean;
};

export const initialGameState: GameState = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true,
};

export const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], isDraw: false };
    }
  }
  if (!squares.includes(null)) {
    return { winner: null, isDraw: true };
  }
  return { winner: null, isDraw: false };
};