import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navegacion">
      <Link to='/'></Link>
      <Container>
      <Navbar.Brand><Link to="/" className="logo"><h3>Lula Calula</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="menu-link" to="/">Inicio</Link></Nav.Link>
            <Nav.Link><Link className="menu-link" to="/productos">Productos</Link></Nav.Link>
            <NavDropdown title="Menú" id="collapsible-nav-dropdown">
              <NavDropdown.Item><Link className="menu-link" to="/productos/guiso">Guisos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="menu-link" to="/productos/guarnicion">Guarniciones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link className="menu-link" to="/productos/vegetariano">Vegetariano</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav> 
          <CartWidget />     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;



