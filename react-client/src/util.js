const axios = require('axios');

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

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let die = shuffled.shift();
      let face = rollDie(die);
      board[i][j] = face;
    }
  }

  return board;
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

export const checkWord = (data, action) => {
  axios.post('/checkWord', data)
  .then(res => {
    if (res.status >= 400) { throw new Error('Something Went Wrong!'); }
    return res;
  })
  .then(data => {
    if (action) action(data.data);
  })
};

// export const jobUpdate = (id, action) => {
//   axios.get(`/jobs/${ id }`)
//   .then(res => {
//     if (res.status >= 400) { throw new Error('Something Went Wrong!'); }    
//     return res;
//   })
//   .then(update => {
//     if (action) action(update);
//   })
// };