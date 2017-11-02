import React, { Component } from 'react';
import styles from './Board.css';
import Tile from './Tile.jsx';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this.props.generateBoard()
    }
  }

  render() {
    let index = 1;

    return (
      <div className="board">
        { this.state.board.map((row, i) => {
            
            return (
              <div className="row" key={ i }>
                { row.map((tile, j) => {
                  
                  return (
                    <div className="col" key={ j }>
                      <Tile 
                        tile={ tile }
                        //generateBoard={ this.props.generateBoard }
                        // selected={ this.props.selected }
                        stack={ this.props.stack }
                        currentWord={ this.props.currentWord }
                        makeCurrentWord={ this.props.makeCurrentWord }
                        

                        reset={ this.props.reset }
                        count={ this.props.count }
                        selectedFreq={ this.props.selectedFreq }
                        index={ index++ }
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
}

export default Board;