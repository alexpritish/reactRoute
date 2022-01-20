import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Amazing Things</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          
          <Nav.Link as={Link} to="/topics">Topics</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header
