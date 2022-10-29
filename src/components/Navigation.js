import { useState } from 'react';
import { Navbar, Container, Nav, Alert } from 'react-bootstrap';

const Navigation = () => {
  const [error, setError] = useState('');

  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Nav className="me-auto my-4 justify-content-center">
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
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
