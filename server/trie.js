class Node {
  constructor(value = '') {
    this.value = value;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add (value, parent = this.root) {
    for (let i = 0; i < value.length ; i++) {
      let node = parent.children.find(child => child.value[i] === value[i]);

      if (!node) {
        node = new Node(value.slice(0, i + 1));
        parent.children.push(node);
      }

      parent = node;
    }

    return parent;
  }

  find (value, parent = this.root) {
    for (let i = 0; i < value.length; i++) {
      parent = parent.children.find(child => child.value[i] === value[i]);

      if (!parent) return null;
    }
    return parent;
  }

//   findWords(value, parent = this.root) {
//     let top = this.find(value, parent);
//     if (!top) return [];

//     let words = [];

//     top.children.forEach(function getWords(node) {
//       if (node.category) words.push(node);
//       node.children.forEach(getWords);
//     });

//     return words;
//   }
// ...
}

module.exports = Trie; 







// class Queue {
//   constructor() {
//     this.data = []; 
//     this.size = 0; 
//   }

//   enqueue(job) {
//     this.data.push(job); 
//   }

//   dequeue() {
//   	return this.data.shift(); 
//   }
// }

// module.exports = Queue; 