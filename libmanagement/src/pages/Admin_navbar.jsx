import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import Dashboard from "./Dashboard";
import BookList from "./BookList";
import UserList from "./UserList";
import AddBook from "./AddBook";

function AdminNavbar() {
  return (
    <Router>
      <BootstrapNavbar bg="dark" variant="dark" expand="lg">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            Library System
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/add_book">
                Add Book
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Add Category
              </Nav.Link>
              <Nav.Link as={Link} to="/books">
                Books
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Logout→
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add_book" element={<AddBook />} />


          {/* <Route path="#" element={<AddBook />} />
          <Route path="#" element={<AddCategory />} /> */}


          <Route path="/books" element={<BookList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default AdminNavbar;
