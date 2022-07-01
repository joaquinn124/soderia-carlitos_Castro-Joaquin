import '../css/NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../components/Logo';
import CartIcon from '../components/CartWidget';
import { BrowserRouter, Link, NavLink, Router } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar className='bgColor' expand="lg">
      <Container className='fontColor'>
      <BrowserRouter>
        <Nav.Link href="#home">
        <Link to="/">
          <Logo className="mr-2" />
        </Link>          
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <p className='buyBy'>BUY BY</p>
            
              <Link to="/collection/regular" className='fontColor'>Regular</Link>
              <Link to="/collection/limited" className='fontColor'>Ltd. Editions</Link>         
            
            {/* <NavDropdown title="More options" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Another Option</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">External link</NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
        </BrowserRouter> 
      </Container>
    </Navbar>
  )
}

export default NavBar