import  Container  from "react-bootstrap/Container"
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import  NavDropdown  from "react-bootstrap/NavDropdown"
import './navBar.css'
import logo from './logoMora.png'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <Navbar className="navBar" collapseOnSelect expand="lg" bg="#e8b1a8" variant="light">
      <Container>
      <Navbar.Brand><NavLink to='/'><img className="logo" src={logo} alt="logo"></img></NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto " id="items">
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item><NavLink to='/productos/body'>body</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to='/productos/remera'>Remeras</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to='/productos/tops'>Tops </NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to='/productos/vestido'>Vestidos </NavLink></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavLink to='/cart'>
            <CartWidget/>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar