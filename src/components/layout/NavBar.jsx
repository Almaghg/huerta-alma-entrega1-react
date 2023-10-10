import React from 'react';
import CartWidget from './CartWidget';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Link to='/'></Link>
      <Container>
        <Navbar.Brand href="#home">Lula Calula</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <NavDropdown title="Menú" id="collapsible-nav-dropdown">
              <NavDropdown.Item> <NavLink to={`/tipo/guisos`} className={isActive ? 'ActiveOption' : 'Option'} > Guisos </NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={`/tipo/guarniciones`} className={isActive ? 'ActiveOption' : 'Option'} > Guarniciones </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item><NavLink to={`/tipo/vegetariano`} className={isActive ? 'ActiveOption' : 'Option'} > Vegetariano </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav> 
          <CartWidget/>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;