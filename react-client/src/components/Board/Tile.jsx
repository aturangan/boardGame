import React, { Component } from 'react';
import styles from './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

   // this.handleSubmit = this.handleSubmit.bind(this);
  }


  render() {
    const tileRow = this.props.tile.rowId;
    const tileCol = this.props.tile.columnId;
    const index = this.props.index;

    return (
      <div className={ this.props.selected ? 'tile-selected' : 'tile'}>
        <div className="letter" onClick={ () => this.props.handleClick(tileRow, tileCol) }>
          { this.props.tile.letter }{ this.props.index }
        </div>
      </div>
    );
  }
}

export default Tile;

  // componentWillMount() {
  //   for (let i = 1; i <= 25; i++) {
  //     this.props.selectedFreq[i] = 0;
  //   }

  // }

  // handleSubmit(e, index) {
  //   //now just need to add the check for adjacent/diagonal 
  //   let freq = this.props.selectedFreq;
  //   let top = this.props.stack[this.props.stack.length - 1];
  //   let freqIndex = JSON.stringify(freq[index]);
  //   let currentFreqIndex = JSON.stringify([1, index, e]);

  //   if (freq[index][0] === 1) {
  //     console.log('freq at index', freq[index]);
  //     console.log('top', top);

  //     //need to check the top letter and id but stack only has letter 
  //     if (e === top) {
  //       for (let key in freq) {
  //         if (freq[key][2] === e && freq[key][1] === index) {
  //           console.log('freq key 1', freq[key][1]);
  //           console.log('current index', index);

  //           this.setState({
  //             stack: this.props.stack.pop()
  //           });
  //         }
  //       }
  //     }

    /******** TOOK OUT THIS PART ********/
      // if (e === top && (freqIndex !== currentFreqIndex)) { //if e is the same as the top AND index is the same
      //   freq[index] = 0;

      //   this.setState({
      //     stack: this.props.stack.pop(),
      //   });
      // }

      //if freq is 1 and not on the stack?? shouldnt happen??
   
/************** END HERE BUT GRAB BELOW **************/

  //   } else if (freq[index] === 0) {
  //     console.log('freq index', freq[index]);
      
  //     if (freqIndex !== currentFreqIndex) { //need to check the index too b/c this doesn't work with 2 consecutive same letters
  //       freq[index] = [1, index, e];
  //       console.log('saved', freq[index]);
        
  //       this.setState({
  //         stack: this.props.stack.push(e)
  //       });
  //     }
  //   }


  //   console.log('index value', index);
  //   console.log('e value', e);
  //   console.log(this.props.stack);
  //   this.props.makeCurrentWord();
  // }

//   render() {
//     const tile = this.props.tile;
//     const index = this.props.index;

//     return (
//       <div className={ this.props.selectedFreq[index][0] === 1  ? 'tile-selected' : 'tile'}>
//         <div className="letter" onClick={ () => { this.handleSubmit(tile, index) } }>
//           { tile }{ this.props.index }
//         </div>
//       </div>
//     );
//   }
// }

  
