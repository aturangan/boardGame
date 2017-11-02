import React, { Component } from 'react';
import styles from './ScoreTable.css';

class ScoreTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table">
          <tr>
            <th className="word">Word</th>
            <th className="score">Score</th>
          </tr>

          { this.props.validWords ? this.props.validWords.map((word, i) => {
            return (
              <tr key={ i }>
                <th className="words">{ word }</th>
                <th className="scores">{ this.props.points[i] }</th>
              </tr>
            );}) : 
              <tr>
                <th className="words" key={ i }>{ word }</th>
              </tr>
          }       

        <tr>
          <th className="totalWord">Total: </th>
          <th className="total">{ this.props.totalScore }</th>
        </tr>
      </div>
    );
  }
}

export default ScoreTable;