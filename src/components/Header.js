import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import './css/header.css'


export default function Header() {
    return (
        <Navbar bg="light" variant="light" className='header-nav'>
        <Container>
        <Navbar.Brand href="#home">City Exploler</Navbar.Brand>
        <Nav className="me-auto">
          
          <Nav.Link href="#weather">Weather</Nav.Link>
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#yelp">Yelp</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
