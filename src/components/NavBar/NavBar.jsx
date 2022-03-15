import  Container  from "react-bootstrap/Container"
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import  NavDropdown  from "react-bootstrap/NavDropdown"
import './navBar.css'
import logo from './logoMora.png'
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
  return (
    <Navbar className="navBar" collapseOnSelect expand="lg" bg="#e8b1a8" variant="light">
      <Container>
      <Navbar.Brand href="#home"><img className="logo" src={logo}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto " id="items">
          <Nav.Link href="#features">Quienes Somos</Nav.Link>
          <Nav.Link href="#pricing">Ofertas</Nav.Link>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tops</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><a href="#">
            <CartWidget/>
            </a></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar