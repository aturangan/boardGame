const express = require('express');
const router = express.Router();

const checkWord = require('./helpers').checkWord;

router.post('/checkWord', checkWord);



// router.get('/', (req, res) => {
//   res.render('index.html')
// });

// router.post('/jobs', createJob);

// router.get('/jobs/:id', jobUpdate);

// router.get('/html/:id', showHTML);

module.exports = router;