export default class Dice {
  constructor(letter, rowId, columnId, selected = false) {
    this.letter = letter;
    this.rowId = rowId;
    this.columnId = columnId;
    this.selected = selected;
  }

  clone() {
    return new Dice(this.letter, this.rowId, this.columnId, this.selected);
  }
}

module.exports = Dice;