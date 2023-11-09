let books =  [
    {
      "id": 1,
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "id": 2,
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "id": 3,
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
];

let lastId = 3;


module.exports = {
    findAll() {
       return books;
    },

    findOne(id) {
        return books.find(book => book.id === id);
    },

    create(book) {
        const id = ++lastId;
        const newBook = {
            id,
            author: book.author,
            country: book.country,
            imageLink: book.imageLink,
            language: book.language,
            link: book.link,
            pages: book.pages,
            title: book.title,
            year: book.year,
           }
        books.push(newBook);
        return newBook;
    },

    update(id, book) {
       const existingBook = books.find(body => book.id === id);
       if(!existingBook) {
          return null;
       }
       const updateBook = {
       ...existingBook,
       ...book,
       };
       books = books.map(book => {
         if(book.id === id) {
            return updateBook;
         }
         return book;
       });
       return updateBook;
    },

    destroy(id) {
        books = books.filter(book => book.id !== id);
        return id;
    }
    


}