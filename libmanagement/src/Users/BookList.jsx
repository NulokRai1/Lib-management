import { useState } from "react";
import BookCard from "./BookCard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bookPic from '../assets/pic1.jpg'
import { Link } from "react-router-dom";



function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      isAvailable: true,
      image: bookPic,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      isAvailable: false,
      image: bookPic,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const borrowBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isAvailable: false } : book
      )
    );
  };

  const filteredBooks = books.filter((book) =>
    [book.title, book.author, book.genre, book.isAvailable ? "available" : "unavailable"]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="me-auto">Books</h1>
        <div className="d-flex justify-content-center flex-grow-1 mx-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search by name, genre, author, or availability"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Link to="/add-book" className="btn btn-success">
          Add Book
        </Link>
      </div>
      <div className="list-group">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <BookCard book={book} borrowBook={borrowBook} />
            </div>
          ))
        ) : (
          <p className="text-center">No books found matching the search query.</p>
        )}
      </div>

      
    </div>
  );
}

export default BookList;
