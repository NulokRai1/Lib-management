import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
            Our Library Management System helps libraries manage books, borrowing, and returns easily. It makes it simple for users to search for, reserve, and borrow books. We aim to make library operations smooth and accessible for everyone.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/books" className="text-white text-decoration-none">
                  Books
                </a>
              </li>
              <li>
                <a href="/users" className="text-white text-decoration-none">
                  Users
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-white me-3 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Library Management. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
