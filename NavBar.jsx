import React from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Lula Calula</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <NavDropdown title="Menú" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Guisos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Guarniciones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vegetariano</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <CartWidget/> {/* //No funciona :'( */}
          </Nav>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;