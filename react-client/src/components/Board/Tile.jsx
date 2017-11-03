import React, { Component } from 'react';
import styles from './Tile.css';

const Tile = (props) => {
  const tileRow = props.tile.rowId;
  const tileCol = props.tile.columnId;
  const index = props.index;

  return (
    <div className={ props.selected ? 'selected' : 'normal' }>
      <div className="letter" onClick={ () => props.handleClick(tileRow, tileCol) }>
        { props.tile.letter }
      </div>
    </div>
  );
};

export default Tile;