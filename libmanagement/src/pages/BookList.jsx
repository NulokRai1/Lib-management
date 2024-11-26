import { useState } from "react";
import BookCard from "../components/BookCard";

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian", isAvailable: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", isAvailable: false },
    // More books
  ]);

  const borrowBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, isAvailable: false } : book))
    );
  };

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} borrowBook={borrowBook} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
