import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import Dashboard from "../pages/Dashboard";
import BookList from "./BookList";
import AddBook from "./AddBook";
import UserProfile from "./Profile";


function Navbar() {
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
            <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/books">
                Books
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Recommendations
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Borrowed Books
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
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default Navbar;
