const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('view all recipes');
})
router.post('/', (req, res) => {
  res.send('insert recipes');
})
router.put('/:put', (req, res) => {
  res.send('update a recipe');//update
})
router.delete('/:id', (req, res) => {
  res.send('delete a recipe');
})
router.get('/search/:id', (req, res) => {
  res.send('Searching for a recipe using name');
})


  
  module.exports = router;