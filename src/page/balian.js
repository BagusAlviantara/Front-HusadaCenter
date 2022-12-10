import { Form, Button, Row, Navbar, Container, Nav, Col, Card } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import profile from '../assets/image/profile-png.png'
import "../App.css"
import Headerlog from "../aflogin/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
const PengobatanAlternatif = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get("https://api.husadacenter.id/pengobatan", { withCredentials: 'true' })
            .then((response) => {
                setData(response.data);
                console.log(response.data)
            });
    };

    return (
        <div >
            <Headerlog />
            <div style={{ background: '', height: '100%' }}>
                <br></br>
                <p className="text-center text-dark">Pengobatan Alternatif</p>
                <hr />
                <Container className="mx-auto d-flex mt-5">
                    <Row className="">
                        {data.map((item, key) =>
                            <Col xs={12} md={6} lg={4} className='text-center px-3'>
                                <Card className="obtoffe mb-5" key={key} >
                                <div className="mt-3"><img src={item.URL} alt="drive image" style={{ height: '150px', width: '250px' }} /></div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
{/*                                        
                                        <div className="d-flex justify-content-between pt-3 px-3 text-dark">
                                            <div></div>
                                            <a href={"https://wa.me/+62"+item.phone}
                                            class="whatsapp_float" 
                                            target="_blank"
                                            body="hello world"
                                            rel="noopener noreferrer">
                                                <Button>Hubungi Saya</Button>
                                            </a>
                                            <div></div>
                                        </div> */}
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

export default PengobatanAlternatif;