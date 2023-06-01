const express = require("express");

const router = express.Router();

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
  } = require('./controllers/bookController');
  
  // GET /books
  router.get('/books', getAllBooks);
  
  // GET /books/:id
  router.get('/books/:id', getBookById);
  
  // POST /books
  router.post('/books', createBook);
  
  // PUT /books/:id
  router.put('/books/:id', updateBook);
  
  // DELETE /books/:id
  router.delete('/books/:id', deleteBook);


module.exports = router;