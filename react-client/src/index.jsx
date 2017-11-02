import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from './logo.png';
import styles from './index.css';

import { generateBoard, calculateScore, checkWord } from './util.js';
import Board from './components/Board/Board.jsx';
import CurrentWord from './components/CurrentWord/CurrentWord.jsx';
import ScoreTable from './components/ScoreTable/ScoreTable.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selected: false,
      selectedFreq: {}, 
      reset: false,
      count: 0,
      stack: [],
      currentWord: '',
      

      validWords: [],
      points: [],
      totalScore: 0,
      renderScores: false
    }

    this.makeCurrentWord = this.makeCurrentWord.bind(this);
    this.resetSelectedFreqs = this.resetSelectedFreqs.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  makeCurrentWord() {
    let word = ''; 

    for (let i = 0; i < this.state.stack.length; i++) {
      let letter = this.state.stack[i]; 

      word += letter; 
    }

    this.setState({
      currentWord: word
    });
  }

  resetSelectedFreqs() {
    for (let i = 1; i <= 25; i++) {
      this.state.selectedFreq[i] = 0;
    }

    console.log('in reset selected freq from index jsx')
  }

  resetBoard() {

    let word = this.state.currentWord;
    let score = calculateScore(word);

    checkWord({ word: word}, res => {
      const total = score + this.state.totalScore;

      this.setState({
        validWords: this.state.validWords.concat([word]),
        points: this.state.points.concat([score]),
        totalScore: total,
        renderScores: !this.state.renderScores
      });  

      console.log('valid words', this.state.validWords);
    }); 

    if (this.state.count >= 1) {
      this.resetSelectedFreqs();

      this.setState({
        count: 0,
        stack: [],
        currentWord: '',
        reset: false
      });
    } else {
      this.setState({
        stack: [],
        currentWord: '',
        reset: true, //board is white, reset is true
        count: this.state.count + 1 //count is 1 
      });

      console.log('COUNT FROM INDEX.JSX', this.state.count);
    }
  }

  render() {
    return (
      <div className="main">
        <img className="logo" src={ logo }/>
        <Board 
          generateBoard={ generateBoard } 
          //selected={ this.state.selected }
          stack={ this.state.stack }
          currentWord={ this.state.currentWord }
          makeCurrentWord={ this.makeCurrentWord }
          
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