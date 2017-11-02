import React, { Component } from 'react';
import styles from './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selected: false
      //generate board is being passed as a prop
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    for (let i = 1; i <= 25; i++) {
      this.props.selectedFreq[i] = 0;
    }
  }

  handleSubmit(e, index) {
    //now just need to add the check for adjacent/diagonal 
    let freq = this.props.selectedFreq;

    //if not selected and reset board, then add one and add to stack
    if (freq[index] === 0 && this.props.count === 0) {
      console.log('index: ', index);
      console.log('freq[index]: ', freq[index]);

      freq[index] = 1;
      this.setState({
        stack: this.props.stack.push(e)
      });
      console.log('fix first one');


    //if already 1 and on SECOND new game
    } else if (freq[index] === 1 && this.props.count === 1) { //make sure count goes back to 0
      freq[index] = 0;

      console.log('fix third one');

      this.setState({
        stack: this.props.stack.push(e)
      });

    } else if (freq[index] === 0 && this.props.count === 1) {
      freq[index] = 1;
      this.setState({
        stack: this.props.stack.push(e)
      });
    

    } else if (freq[index] = 1 && (e === this.props.stack[this.props.stack.length - 1])) {
      this.setState({
        //selected: false,
        stack: this.props.stack.pop()
      });

      console.log('fix third one')
    } else {
      console.log('IN ELSE');
      console.log('freq[index]: ', freq[index]);
      console.log('this props count ', this.props.count);
    }


    // if (!this.state.selected) { 
    //   this.setState({
    //     selected: !this.state.selected, //selected is true, added to stack
    //     stack: this.props.stack.push(e),
    //     selectedFreq: this.props.selectedFreq 
    //   });
    // } else if (this.state.selected && this.props.count === 1) {
    //     this.setState({
    //       selected: false,
    //       stack: this.props.stack.push(e)
    //     });
        

    // } else if (this.state.selected && (e === this.props.stack[this.props.stack.length - 1])) {
    //   this.setState({
    //     selected: false,
    //     stack: this.props.stack.pop()
    //   });
    // } else if (this.state.selected) {
    //   console.log('already selected tile')
    //   console.log('in test run', this.props.count);
    // }


    this.props.makeCurrentWord();

    console.log(this.props.stack);
  }

  render() {
    const tile = this.props.tile;
    const index = this.props.index;

    //props reset is true, count is 1 
    //if selected = true && reset = false then blue
    //if reset = true and !selected

    return (
      <div className={ this.props.selectedFreq[index] === 1  ? 'tile-selected' : 'tile'}>
        <div className="letter" onClick={ () => { this.handleSubmit(tile, index) } }>
          { tile }
        </div>
      </div>
    );
  }
}

export default Tile;