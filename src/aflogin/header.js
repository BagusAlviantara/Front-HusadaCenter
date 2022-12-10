
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React from "react";
import "../App.css"
const Headerlog = () => {
    var x = localStorage.getItem("isLogin");
    return (
        <div className="header p-2 " >
            <Navbar collapseOnSelect expand="lg" className="atasH">
                <Container className="" >
                    <div>
                        <Navbar.Brand href="/dashboard" className="brand text-white" >Husada Center</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto text-white">
                            <Nav.Link href="/kjawa" className="text-white">Kalender</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link href="/" className="p-2">Logout</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headerlog;