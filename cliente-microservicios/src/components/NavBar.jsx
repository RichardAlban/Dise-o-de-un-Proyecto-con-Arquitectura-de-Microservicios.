import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contactos</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};



export default NavBar;