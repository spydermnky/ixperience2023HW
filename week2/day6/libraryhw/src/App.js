import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  // Declare a new State variable
  // React hook used managing component state
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <BookForm
          bookToEdit={bookToEdit}
          onBookCreated={onBookCreated}
        ></BookForm>
        <BookTable
          books={books}
          onBookEdit={onBookEdit}
          onBookDelete={onBookDelete}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;