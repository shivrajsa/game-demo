const createBoard = (size) => {

  // two-dimensional array filled with nulls
  const board = Array(size).fill().map(() => Array(size).fill(null));

  const makeTurn = (x, y, value) => {
    board[y][x] = value;
  };

  const getBoard = () => board;

  return {
    makeTurn,
    getBoard
  }
};

module.exports = createBoard;
