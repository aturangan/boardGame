const request = require('request');
const bodyParser = require('body-parser');
const Trie = require('./trie.js');

const trie = new Trie();
let hash = {};

module.exports.checkWord = (req, res) => {
  //if word is in trie, send back a NO to client

   const word = Object.keys(req.body)[0];
  console.log('word', word);

  // let outcome = {};

  // if (!hash.hasOwnProperty(word)) {
  // 	hash[word] = 1;
  // 	outcome[outcome] = 'Valid';
  // } else if (hash[word]) {
  // 	outcome[outcome] = 'Invalid';
  // }

  // console.log('HASH', hash);
  // res.send(outcome);

  let outcome = 'Word Already Added';

  if (!trie.find(word)) {
    trie.add(word);
    console.log(word + ' was added to the trie');
    outcome = 'Valid'; 
  } else {
  	outcome = 'Word Already Added';
  }

  res.send(outcome);
};


















// const Queue = require('./queue.js');

// const db = require('../database-mongo/index.js');

// let jobId = 0;
// const queue = new Queue();

// module.exports.createJob = (req, res) => {  
//   jobId++; 

//   let jobDetails = {
//     jobId: jobId,
//     url: req.body.url,
//     html: ''
//   };

//   queue.enqueue(jobDetails); 
//   queue.size++; 

//   res.send({
//     jobId: jobId,
//     url: req.body.url,
//     html: '',
//     completed: false
//   });

//   this.checkQueue();  
// };

// module.exports.checkQueue = () => {
//   if (queue.data.length > 0) {
//     let job = queue.dequeue(); 
//     queue.size--; 

//     this.getHTML(job); //pretty sure this is asynchronous already
//   } 
// };

// module.exports.getHTML = (jobDetails) => {
//   request.get(jobDetails.url, (error, response, data) => {
//     let html;

//     if (!error && response.statusCode == 200) {
//       html = data; 
//     } else {
//       html = '<p>HTML Could Not Be Retrieved</p>'; 
//     }

//     jobDetails.html = html; 
//     this.saveToDB(jobDetails); 
//     this.checkQueue(); 
//   });

//   console.log('in the get html thing, checking for async');
// };

// module.exports.saveToDB = (jobDetails) => {
//   let DB = new db({
//     jobId: jobDetails.jobId,
//     url: jobDetails.url,
//     html: jobDetails.html
//   });

//   DB.save(err => {
//     if (err) {
//       console.log('Error Saving to Database', err);
//     } else {
//       console.log('Successfully Saved to Database');
//     }
//   }); 

//   //this.checkQueue(); 
// };

// module.exports.jobUpdate = (req, res) => {
//   const id = req.params.id; 

//   db.findOne({ jobId: id }, (error, wasFound) => {
//     if (error) { 
//       res.status(400); 
//       throw new Error('Database Error');
//     } else {
//       res.send(wasFound); 
//     } 
//   });
// };

// module.exports.showHTML = (req, res) => {
//   const id = req.params.id;

//   db.findOne({ jobId: id }, (error, wasFound) => {
//     if (error) {
//       res.status(400); 
//       throw new Error('HTML Not Found in Database'); 
//     } else {
//       res.send(wasFound);
//     }
//   });
// };
