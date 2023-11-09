const express = require('express');
const app = express();
const port = 3000;
//const bodyParser = require('body-parser');

const Book = require('./Book');
// app.use(bodyParser.json());
app.use(express.json());

// Get All books
app.get('/books', (req , res) => {
    res.send(Book.findAll());
});

// create new Books
app.post('/books', (req , res) => {
    res.send(Book.create(req.body));
});

// update Books
app.put('/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const updatedBook = Book.update(bookId, req.body);
    if(!updatedBook) {
        return res.status(404).send({
            message: 'The book you want to update does not exist';
        });
    }
    res.send(updatedBook);
});

// Delete Books
app.delete('/books/:bookId', (req , res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const book = Book.findOne(bookId);
    if(!book) {
        return res.status(404).send({
            message: 'The book you want to delete does not exist';
        })
    }
     const destroyedBookId = Book.destroy(bookId);
     if(destroyedBookId != null) {
        res.sendStatus(204);
     }
     res.status(500).send({
          message: 'Could not delete the book';
     });
});

// Get Books by id 
app.get('/books/:bookId', (req , res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const book = Book.findOne(bookId);
    if(!book){
        res.status(404).send({
            message: 'Could not find the book';
        });
        return;
    }
    res.send(book);
});

// Listen Port
app.listen(port, () => {
   console.log(`Express server is now listening on ${port}.`);
});

