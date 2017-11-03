const axios = require('axios');
const TileData = require('./Dice.js');

let wordHash = {};

export const checkWord = (word) => {
  if (!wordHash.hasOwnProperty(word)) {
    wordHash[word] = 1;
    return true;
  } else {
    return false;
  }
};

const shuffleDice = (dice) => {
  for (let i = dice.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [dice[i], dice[j]] = [dice[j], dice[i]];
  }

  return dice;
};

const rollDie = (die) => {
  let randomIndex = Math.floor(Math.random() * die.length);
  return die[randomIndex];
};

export const generateBoard = () => {
  const board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ];

  const dice = [
    'AAAFRS',
    'AAEEEE',
    'AAFIRS',
    'ADENNN',
    'AEEEEM',
    'AEEGMU',
    'AEGMNN',
    'AFIRSY',
    'BJKQXZ',
    'CCENST',
    'CEIILT',
    'CEILPT',
    'CEIPST',
    'DDHNOT',
    'DHHLOR',
    'DHLNOR',
    'DHLNOR',
    'EIIITT',
    'EMOTTT',
    'ENSSSU',
    'FIPRSY',
    'GORRVW',
    'IPRRRY',
    'NOOTUW',
    'OOOTTU'
  ];

  const shuffled = shuffleDice(dice);

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      let die = shuffled.shift();

      let face = rollDie(die);
      const tileData = new TileData(face, row, col);
      board[row][col] = tileData;
    }
  }

  return board;
};

export const duplicateBoard = (board) => {
  const copy = board.map(row => {
    return row.map(box => {
      return box.clone();
    });
  });
  return copy;
};

export const isTileEqual = (tile1, tile2) => {
  if (!tile1 || !tile2) return false;
  return tile1.rowId === tile2.rowId && tile1.columnId === tile2.columnId;
};

export const isAdjacent = (tile1, tile2) => {
  if (!tile1 || !tile2) return false;
  if (isTileEqual(tile1, tile2)) {
    return false;
  }

  const colDiff = Math.abs(tile1.columnId - tile2.columnId);
  const rowDiff = Math.abs(tile1.rowId - tile2.rowId);
  if (colDiff <= 1 && rowDiff <= 1) {
    return true;
  } else {
    return false;
  }
};


export const calculateScore = (word) => {
  let points = 0;
  let length = word.length; 

  if (length > 8) return 11;
  if (length === 7) return 5;
  if (length === 6) return 3;
  if (length === 5) return 2;
  if (length === 3 || length === 4) return 1;
  if (length === 1 || length === 2 || length === 0) return 0;
};

// export const checkWord = (data, action) => {
//   axios.post('/checkWord', data)
//   .then(res => {
//     if (res.status >= 400) { throw new Error('Something Went Wrong!'); }
//     return;
//   })
//   .then(data => {
//     console.log('data', data);
//     if (action) action(data);
//   })
// };