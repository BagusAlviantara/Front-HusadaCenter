import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../App.css";

const HeaderOff = () => {
    return (
        <div className="header p-2" >
            <Navbar collapseOnSelect expand="lg" className="atasH">
                <Container className="" >
                    <div>
                        <Navbar.Brand href="/" className="brand text-white" >Husada Center</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto text-white">
                            <Nav.Link href="kjawa" className="text-white">Kalender</Nav.Link>
                            <Nav.Link href="/login" className="text-white">Layanan</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="/register" className="text-white">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link href="/login" className="p-2">Login</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderOff;