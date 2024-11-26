import { useState } from "react";
import BookCard from "../components/BookCard";
import { Modal, Button, Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bookPic from '../assets/pic1.jpg'
import { Link } from "react-router-dom";

function AdminBookList() {
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

  const [editModalShow, setEditModalShow] = useState(false);
  const [editBookData, setEditBookData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const borrowBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isAvailable: false } : book
      )
    );
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const openEditModal = (book) => {
    setEditBookData(book);
    setEditModalShow(true);
  };

  const handleEditSave = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === editBookData.id ? editBookData : book
      )
    );
    setEditModalShow(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBookData({ ...editBookData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create an object URL for the selected file (temporary URL)
      const imageUrl = URL.createObjectURL(file);
      setEditBookData({ ...editBookData, image: imageUrl });
    }
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
              <div>
                <button
                  onClick={() => openEditModal(book)}
                  className="btn btn-warning btn-sm me-2"
                  aria-label="Edit"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="btn btn-danger btn-sm"
                  aria-label="Delete"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No books found matching the search query.</p>
        )}
      </div>

      {/* Edit Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editBookData && (
            <Form>
               <Form.Group className="mb-3">
                <Form.Label>Book Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {editBookData.image && (
                  <div className="mt-2">
                    <img
                      src={editBookData.image}
                      alt="Book Cover Preview"
                      className="img-fluid"
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editBookData.title}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={editBookData.author}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={editBookData.genre}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Availability</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Available"
                  name="isAvailable"
                  checked={editBookData.isAvailable}
                  onChange={(e) =>
                    setEditBookData({
                      ...editBookData,
                      isAvailable: e.target.checked,
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminBookList;
