import { Injectable } from '@nestjs/common';

const books = [
  {
    id: 1, name: 'book1', authors: [1, 2, 3],
  },
  {
    id: 2, name: 'book2', authors: [1],
  },
  {
    id: 3, name: 'book3', authors: [2, 3],
  },
];

const authors = [
  {
    id: 1, name: 'Lux', books: [1, 2],
  },
  {
    id: 2, name: 'Zang', books: [1, 3],
  },
  {
    id: 3, name: 'Dog', books: [1, 3],
  },
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBooks() {
    return books;
  }

  getAuthors() {
    return authors;
  }

  getBook(id) {
    return books.find(x => x.id === id);
  }

  getAuthor(id) {
    return authors.find(x => x.id === id);
  }
}
