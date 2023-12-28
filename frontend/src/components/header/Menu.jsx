

import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Menu() {
  return (
    <>     
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src="/images/menu.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'    '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
          <NavDropdown title="SHOP CATEGORIES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="py-2 text-white opacity-75" to="/">Home</Link>
            <Link className="py-2 text-white opacity-75" to="/about">About</Link>
            <Link className="py-2 text-white opacity-75" to="/store">Our Store</Link>
            <Link className="py-2 text-white opacity-75" to="/contact">Contact</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  );
}
