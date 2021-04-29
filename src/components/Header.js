import {Navbar, NavDropdown, Form, Nav, FormControl, Button} from 'react-bootstrap'

const Header = ({countCartItems}) => {
    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Add To Cart<span className="badge">{''}{countCartItems?(countCartItems):(0)}</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
</Navbar>
        </div>
    )
}

export default Header
