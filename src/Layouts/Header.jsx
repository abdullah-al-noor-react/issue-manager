import { Navbar, Nav} from 'react-bootstrap';


const Header = () => {
    return(
        <Navbar bg="primary" expand="lg">
        
            <Navbar.Brand href="#home" className='text-white mx-5'>Issue Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white ">
                <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header