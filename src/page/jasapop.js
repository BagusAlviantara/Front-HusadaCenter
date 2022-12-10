
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React from "react";
import profile from '../assets/image/profile-png.png'
import "../App.css"
const Jasapopuler = () => {
    return (
        <div >
            <div className="header p-2 " >
                <Navbar collapseOnSelect expand="lg" className="atasH">
                    <Container className="" >
                        <div>
                            <Navbar.Brand href="#home" className="brand text-white" >Husada Center</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto text-white">
                                <Nav.Link href="#features" className="text-white">Informasi</Nav.Link>
                                <Nav.Link href="#features" className="text-white">Layanan</Nav.Link>
                                <Nav.Link href="#features" className="text-white">Peta</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Link href="/" className="p-2">Logout</Nav.Link>
                    </Container>
                </Navbar>
            </div>
            <div style={{background:'#850E35'}}>
                <br></br>
                <p className="text-lg-center text-white">Jasa Pengobatan Populer</p>
                <hr/>
                <Container className="mx-auto d-flex justify-content-between">
                    <Card style={{ width: '28rem',border:"primary"}}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}}/>
                        <Card.Body>
                            <Card.Title>I Gede Herry</Card.Title>
                            <Card.Text>
                                Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di dada
                            </Card.Text>
                            <Button variant="primary" href="/pengobatan">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem',border:"primary", }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>I Made Teguh</Card.Title>
                            <Card.Text>
                                Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di kaki
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem',border:"primary", }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>Tery Sujana</Card.Title>
                            <Card.Text>
                            Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di pundak
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <Container className="mx-auto d-flex justify-content-between mt-5">
                    <Card style={{ width: '28rem',border:"primary", }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>Made Alvin</Card.Title>
                            <Card.Text>
                            Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di lutut
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem',border:"primary", }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>Komang Tresna</Card.Title>
                            <Card.Text>
                            Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman menyembuhkan tidak bisa melihat
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem',border:"primary",  }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>Dwiyanti</Card.Title>
                            <Card.Text>
                            Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di dada
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <Container className="mx-auto d-flex justify-content-between mt-5">
                    <Card style={{ width: '28rem',border:"primary"}}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}}/>
                        <Card.Body>
                            <Card.Title>I Gede Herry</Card.Title>
                            <Card.Text>
                                Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di dada
                            </Card.Text>
                            <Button variant="primary" href="/pengobatan">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem',border:"primary", }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>I Made Teguh</Card.Title>
                            <Card.Text>
                                Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di kaki
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem',border:"primary", }}>
                        <Card.Img variant="top" src={profile}  style={{height:'140px', width:'280px', paddingLeft:'100px' ,}} />
                        <Card.Body>
                            <Card.Title>Tery Sujana</Card.Title>
                            <Card.Text>
                            Pengalaman menyembuhkan orang sakit <br/>
                                pengalaman meredakan nyeri di pundak
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

        </div>
    );
};

export default Jasapopuler;