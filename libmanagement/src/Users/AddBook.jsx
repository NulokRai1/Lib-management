import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [book, setBook] = useState({
    bookName: "",
    bookDescription: "",
    bookAuthor: "",
    bookCategory: "",
  });

  const [bookImage, setBookImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleImageChange = (e) => {
    setBookImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("bookName", book.bookName);
      formData.append("bookDescription", book.bookDescription);
      formData.append("bookAuthor", book.bookAuthor);
      formData.append("bookCategory", book.bookCategory);
      if (bookImage) {
        formData.append("file", bookImage);
      }

      const response = await axios.post("http://localhost:5000/api/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setMessage("Book added successfully!");
        setBook({ bookName: "", bookDescription: "", bookAuthor: "", bookCategory: "" });
        setBookImage(null);
      } else {
        setMessage(response.data.messsage || "Failed to add the book.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while adding the book.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add a New Book</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            className="form-control"
            value={book.bookName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bookDescription" className="form-label">
            Book Description
          </label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            className="form-control"
            value={book.bookDescription}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="bookAuthor" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="bookAuthor"
            name="bookAuthor"
            className="form-control"
            value={book.bookAuthor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bookCategory" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="bookCategory"
            name="bookCategory"
            className="form-control"
            value={book.bookCategory}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bookImage" className="form-label">
            Book Image
          </label>
          <input
            type="file"
            id="bookImage"
            name="file"
            className="form-control"
            onChange={handleImageChange}
            accept="image/*"
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
