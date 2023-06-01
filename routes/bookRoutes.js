const express = require("express");

const router = express.Router();

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
  } = require('../controllers/bookController');
  
  // GET /books
  router.get('../models/book.js', getAllBooks);
  
  // GET /books/:id
  router.get('../models/book.js/:id', getBookById);
  
  // POST /books
  router.post('../models/book.js', createBook);
  
  // PUT /books/:id
  router.put('../models/book.js/:id', updateBook);
  
  // DELETE /books/:id
  router.delete('../models/book.js/:id', deleteBook);


module.exports = router;