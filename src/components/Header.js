import { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <Fragment>

            <Navbar expand="lg" className="nav-bar sticky-top">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">  Home </Link >
                            <Link to="/about" className="nav-link"> About </Link >
                            <Link to="/projects" className="nav-link"> Projects </Link >
                            <Link to="/contact" className="nav-link"> Contact </Link >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )

};

export default Header;