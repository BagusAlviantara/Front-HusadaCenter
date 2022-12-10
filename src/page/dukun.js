
import { Form, Button, Row, Col, Container, Nav, Modal, Card } from "react-bootstrap";
import React from "react";
import profile from '../assets/image/profile-png.png'
import "../App.css"
import Headerlog from "../aflogin/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
const Dukun = () => {
    const data = [{
        Nama: "Made Alvin",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "1"
    }, {
        Nama: "Komang Tresna",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "2"
    }, {
        Nama: "I Gede Herry",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "3"
    }, {
        Nama: "I Made Teguh",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "4"
    }, {
        Nama: "Komang Tresna",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "5"
    }, {
        Nama: "I Made Teguh",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "6"
    }, {
        Nama: "I Gede Herry",
        Deskripsi: " Pengalaman menyembuhkan orang sakit pengalaman meredakan nyeri di dada",
        Id: "7"
    }];
    return (
        <div >
           <Headerlog/>
            <div style={{ background: '#1f4068', height: '100%' }}>
                <br></br>
                <p className="text-lg-center text-white">Jasa Pengobatan Dukun</p>
                <hr />
                <Container className="mx-auto d-flex mt-5">
                    <Row xs={1} md={3} className="">
                        {data.map((item, key) =>
                            <Col style={{ width: '33%' }} className='text-center px-5'>
                                <Card className="obtoffe mb-5" key={key} >
                                    <div className="mt-3"><Card.Img variant="top" src={profile} style={{ height: '100px', width: '130px', borderRadius: '15%' }} /></div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.Nama}</Card.Title>
                                        <Card.Text>
                                            {item.Deskripsi}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between pt-3 px-5 text-dark">
                                            <FontAwesomeIcon icon={faMessage} size="xl" className="text-left" style={{ width: '70px' }} />
                                            <FontAwesomeIcon icon={faPhone} size="xl" className="text-left" />
                                        </div>
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

export default Dukun;