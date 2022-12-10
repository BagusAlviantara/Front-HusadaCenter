
import { Form, Button, Row, Navbar, Container, Nav, Col, Card } from "react-bootstrap";
import React from "react";
import "../App.css"
import HeaderOff from "./header";


const JasaObtOff = () => {
    const jasa = [{
        nama: "Dukun",
        label: "Jasa pengobatan dukun di seluruh indonesia",
        link: "/login"

    }, {
        nama: "Balian",
        label: "Jasa pengobatan balian di seluruh indonesia",
        link: "/login"
    }, {
        nama: "Penghusada",
        label: "Jasa pengobatan penghusada di seluruh indoensia",
        link: "/login"
    }, {
        nama: "Tabib",
        label: "jasa pengobatan tabib di seluruh indonesia",
        link: "/login"
    }];
    return (
        <div style={{ height: '768px' }}>
            <div><HeaderOff /></div>
            <div style={{ background: "#212121", height: '100%' }} >
                <br></br>
                <h3 className="text-lg-center text-white">List Pengobatan</h3>
                <hr />
                <Container className="mb-5 d-flex ">
                    <Row xs={1} md={2} className="">
                        {jasa.map((item, key) =>
                            <Col style={{width: '50%'}} className='text-center px-5'>
                                    <Card className="obtoff mb-5" key={key} >
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '15px' }}>{item.nama}</Card.Title>
                                            <Card.Text>
                                               {item.label}
                                            </Card.Text>
                                            <Button variant="primary" href={item.link}>Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                              
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default JasaObtOff;