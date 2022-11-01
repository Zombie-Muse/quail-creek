import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navigation = () => {
  const [error, setError] = useState('');

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Nav className="me-auto my-4 justify-content-center">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/covey-call">Covey Call</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/neighborhood-watch">Neighborhood Watch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/community">Community</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/documents">Documents</Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
