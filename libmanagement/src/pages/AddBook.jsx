import React, { useState } from "react";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publishedDate: "",
    copies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    // Add your API call or logic to save the book here
    alert("Book added successfully!");
    setBook({ title: "", author: "", isbn: "", publishedDate: "", copies: "" }); // Clear form after submission
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            className="form-control"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="publishedDate" className="form-label">
            Published Date
          </label>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            className="form-control"
            value={book.publishedDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="copies" className="form-label">
            Number of Copies
          </label>
          <input
            type="number"
            id="copies"
            name="copies"
            className="form-control"
            value={book.copies}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
