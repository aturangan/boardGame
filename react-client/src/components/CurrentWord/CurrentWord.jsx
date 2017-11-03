import React, { Component } from 'react';
import styles from './CurrentWord.css';

const CurrentWord = (props) => {
  return (
    <div>
      <div className="container">
        Current Word:  
        <span className="currentWord">
          { ' ' + props.currentWord }
        </span>
      </div>
      <button className="submit" onClick={ () => props.resetBoard() }>Submit Word</button>        
    </div>
  );
}

export default CurrentWord;