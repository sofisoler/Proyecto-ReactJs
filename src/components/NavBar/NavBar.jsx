import {Container, Nav, Navbar} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="navbar__title">Cosméticos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive })=> isActive ? 'navbar__link-active' : 'navbar__link'} to="/">Inicio</NavLink>
                        <NavLink className={({ isActive })=> isActive ? 'navbar__link-active' : 'navbar__link'} to="/category/makeups">Maquillajes</NavLink>
                        <NavLink className={({ isActive })=> isActive ? 'navbar__link-active' : 'navbar__link'} to="/category/accessories">Accesorios</NavLink>
                    </Nav>
                    <NavLink className={({ isActive })=> isActive ? 'navbar__link-active' : 'navbar__link'} to="/cart"> <CartWidget /> </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar