import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from './logo.png';
import styles from './index.css';

import { generateBoard, duplicateBoard, isTileEqual, 
       isAdjacent, calculateScore, checkWord } from './util.js';
import Board from './components/Board/Board.jsx';
import CurrentWord from './components/CurrentWord/CurrentWord.jsx';
import ScoreTable from './components/ScoreTable/ScoreTable.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.makeBoard = generateBoard();
    this.state = {
      //selected: false,
      board: this.makeBoard,
      currentWord: '',
      currentWordIndex: [],
      //wordScoreList: {},






      //my states
      //selectedFreq: {}, 
      // reset: false,
      count: 0,
      //stack: [],
      // currentWord: '',
      

      validWords: [],
      points: [],
      totalScore: 0,
      //renderScores: false
    }

    //this.makeCurrentWord = this.makeCurrentWord.bind(this);
    //this.resetSelectedFreqs = this.resetSelectedFreqs.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // makeCurrentWord() {
  //   let word = ''; 

  //   for (let i = 0; i < this.state.stack.length; i++) {
  //     let letter = this.state.stack[i]; 
  //     word += letter; 
  //   }

  //   this.setState({
  //     currentWord: word
  //   });
  // }

  // resetSelectedFreqs() {
  //   for (let i = 1; i <= 25; i++) {
  //     this.state.selectedFreq[i] = 0;
  //   }

  //   console.log('FREQ reset from index jsx', this.state.count);
  // }








  //test run
  handleClick(rowId, columnId) {
    const current = this.state.board[rowId][columnId];
    const previous = this.state.currentWordIndex[this.state.currentWordIndex.length - 1]

    if (current.selected) {
      if (isTileEqual(current, previous)) {
        const newBoard = duplicateBoard(this.state.board);
        newBoard[rowId][columnId].selected = false;
        
        this.setState({
          currentWord: this.state.currentWord.slice(0, -1),
          board: newBoard,
          currentWordIndex: this.state.currentWordIndex.slice(0, -1)
        });
      }
    } else {
      console.log('in else statement')

      if (!previous || isAdjacent(current, previous)) {
        const newBoard = duplicateBoard(this.state.board);
        newBoard[rowId][columnId].selected = true;

        this.setState({
          currentWord: this.state.currentWord.concat(newBoard[rowId][columnId].letter),
          board: newBoard,
          currentWordIndex: this.state.currentWordIndex.concat({
            rowId: rowId,
            columnId: columnId
          })
        });
      }
    }
  }

  resetBoard() {
    let word = this.state.currentWord;
    let score = calculateScore(word);

    const emptyBoard = this.makeBoard;

    if (checkWord(word)) {
      const total = score + this.state.totalScore;

      this.setState({
        board: emptyBoard,
        validWords: this.state.validWords.concat([word]),
        points: this.state.points.concat([score]),
        totalScore: total,
        currentWordIndex: [],
        currentWord: ''
      });    
    }
  }

  render() {
    return (
      <div className="main">
        <img className="logo" src={ logo }/>
        <Board 
          generateBoard={ generateBoard } 
          board={ this.state.board }
          //selected={ this.state.selected }
          stack={ this.state.stack }
          currentWord={ this.state.currentWord }
          makeCurrentWord={ this.makeCurrentWord }

          handleClick={ this.handleClick }
          
          reset={ this.state.reset }
          count={ this.state.count }
          selectedFreq={ this.state.selectedFreq }
        />
        <CurrentWord 
          stack={ this.state.stack }
          currentWord={ this.state.currentWord }
          resetBoard={ this.resetBoard }
        />
        <ScoreTable
          validWords={ this.state.validWords }
          points={ this.state.points }
          totalScore={ this.state.totalScore }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));