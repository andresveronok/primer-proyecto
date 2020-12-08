import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">FLAGHA - Tienda de ropa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav.Link href="#">Inicio</Nav.Link>
                <NavDropdown title="Hombre" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
                    <NavDropdown.Item href="#">Calzado</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Mujer" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
                    <NavDropdown.Item href="#">Calzado</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">¡SALE!</Nav.Link>
                <Nav.Link href="#">Carrito</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;