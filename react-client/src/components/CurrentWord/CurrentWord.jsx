import React, { Component } from 'react';
import styles from './CurrentWord.css';

class CurrentWord extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
        <div className="container">
          Current Word:  
          <span className="currentWord">
            { ' ' + this.props.currentWord }
          </span>
        </div>
        <button className="submit" onClick={ this.props.resetBoard }>Submit Word</button>        
      </div>
    );
  }
}

// const CurrentWord = (props) => {
//   return (
//     <div>
//       { props.currentWord }
//     </div>
//   );
// }

export default CurrentWord;