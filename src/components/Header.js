import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">City Exploler</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#location">Location</Nav.Link>
          <Nav.Link href="#weather">Weather</Nav.Link>
          <Nav.Link href="#movies">Movies</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
