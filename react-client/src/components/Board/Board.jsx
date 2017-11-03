import React, { Component } from 'react';
import styles from './Board.css';
import Tile from './Tile.jsx';

const Board = (props) => {
  return (
    <div className="board">
      { props.board.map((row, i) => {  
          return (
            <div className="row" key={ i }>
              { row.map((tile, j) => {          
                return (
                  <div className="col" key={ j }>
                    <Tile 
                      tile={ tile }
                      currentWord={ props.currentWord }
                      selected={ tile.selected }
                      letter={ tile.letter }
                      key={ tile.columnId }
                      handleClick={ props.handleClick.bind(
                        this,
                        tile.rowId,
                        tile.columnId
                      )}
                    />
                  </div>
                );
              })}
            </div>
          );
      })}
    </div>
  );
}

export default Board;