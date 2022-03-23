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
      <Navbar.Brand><NavLink to='/'><img className="logo" src={logo}></img></NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto " id="items">
          <NavLink to='/QuienesSomos'>Quienes Somos</NavLink>
          <NavLink to='/Ofertas'>Ofertas</NavLink>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item><NavLink to='/productos/camisas'>Camisas</NavLink></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tops</NavDropdown.Item>
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