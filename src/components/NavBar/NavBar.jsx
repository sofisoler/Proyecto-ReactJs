import {Container, Nav, Navbar} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Cosméticos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive })=> isActive ? 'btn btn-secondary' : 'btn btn-dark'} to="/">Inicio</NavLink>
                        <NavLink className={({ isActive })=> isActive ? 'btn btn-secondary' : 'btn btn-dark'} to="/category/makeups">Maquillajes</NavLink>
                        <NavLink className={({ isActive })=> isActive ? 'btn btn-secondary' : 'btn btn-dark'} to="/category/accessories">Accesorios</NavLink>
                    </Nav>
                    <NavLink to="/cart"> <CartWidget /> </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar