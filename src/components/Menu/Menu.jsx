import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineShop } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to={'/'}>FLAGHA - Tienda de ropa</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav.Link><Link to={'/'}>Inicio</Link></Nav.Link>
                <NavDropdown title="Hombre" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to={'/category/remeras'}>Remeras</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/jeans'}>Jeans</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/pantalones'}>Pantalones</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/accesorios'}>Accesorios</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/calzado'}>Calzado</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Mujer" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to={'/category/remeras'}>Remeras</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/jeans'}>Jeans</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/pantalones'}>Pantalones</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/accesorios'}>Accesorios</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/category/calzado'}>Calzado</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to={'/category/SALE'}>¡SALE!</Link></Nav.Link>
                <Nav.Link href="#"><AiOutlineShop /></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;

