import { Form, Button, Row, Navbar, Container, Col, Modal, Card } from "react-bootstrap";
import React from "react";
import profile from '../assets/image/profile-png.png'
import "../App.css"
import Headerlog from "../aflogin/header";
const Dashboard = () => {
    const layanan = [
        {
            title: 'Jasa Pengobatan',
            desktripsi: 'Seluruh jasa pengobatan dan konsultasi',
            link: '/pengobatan'
        },
        {
            title: 'Marketplace',
            desktripsi: 'Seluruh obat yang ada',
            link: '/marketplace'
        },
        {
            title: 'Pengobatan Alternatif',
            desktripsi: 'Soon',
            link: '/alternatif'
        }]
    return (
        <div >
            <Headerlog></Headerlog>
            <div className="mt-3 mb-5">
                <p className="text-center"> LAYANAN </p>
                <hr />
                <Container className="mx-auto d-flex justify-content-between">
                    <Row className="text-center">
                        {layanan.map((item, key) =>
                            <Col xs={12} md={6} lg={4} className='text-center px-lg-5'>
                                <Card className="obtoffe mb-5 " key={key} style={{background: '#14ae5c'}} >
                                    <Card.Body >
                                    <Card.Title style={{ fontSize: '15px' ,width: '23rem',  }}></Card.Title>
                                        <Card.Title style={{ fontSize: '15px'  }}>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.desktripsi}
                                        </Card.Text>
                                        <Button variant="primary" href={item.link}>Click Here !</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>





                    {/* <Card style={{ width: '28rem', height: '250px', }}>
                        <Card.Body>
                            <Card.Title>Jasa Pengobatan</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="/pengobatan">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem', height: '250px', background: '#14ae5c' }}>
                       
                        <Card.Body>
                            <Card.Title>Marketplace</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem', height: '250px', background: '#14ae5c' }}>
                      
                        <Card.Body>
                            <Card.Title>Soon</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card> */}

                    {/* <Card className="mx-5" style={{ width: '28rem', height: '250px', background: '#14ae5c' }}>
                       
                        <Card.Body>
                            <Card.Title>Konsultasi</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', height: '250px', background: '#14ae5c' }}>
                        
                        <Card.Body>
                            <Card.Title>Pengobatan Alternatif</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card> */}
                </Container>

            </div>

        </div>
    );
};

export default Dashboard;