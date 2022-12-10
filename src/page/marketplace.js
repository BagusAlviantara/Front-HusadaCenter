import { Form, Button, Row, Navbar, Container, Nav, Col, Card } from "react-bootstrap";

import profile from '../assets/image/error.png'
import "../App.css"
import Headerlog from "../aflogin/header";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Marketplace = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get("https://api.husadacenter.id/obat", { withCredentials: 'true' })
            .then((response) => {
                setData(response.data);
                console.log(data)
            });
    };
    return (
        <div >
            <Headerlog />
            <div style={{ background: '', height: '100%' }}>
                <br></br>
                <p className="text-center text-dark">Marketplace</p>
                <hr />
                <Container className="mx-auto d-flex mt-5">
                    <Row className="">
                        {data.map((item, key) =>
                            <Col xs={12} md={6} lg={4} className='text-center px-3'>
                                <Card className="obtoffe mb-5" key={key} >
                                    <div className="mt-3"><img src={item.URL} alt="drive image" style={{ height: '150px', width: '250px' }} /></div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.latin_name}</Card.Title>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.local_name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between pt-3 px-3  ">
                                            <div>Stock: {item.stock}</div>

                                            <div>Price: Rp. {item.price}</div>
                                        </div>
                                        <a href="https://wa.me/+6287761233098/?text=Halo Admin saya mau beli Produk"
                                            class="whatsapp_float"
                                            target="_blank"
                                            body="hello world"
                                            rel="noopener noreferrer"> <Button className="mt-3">
                                                Beli Sekarang
                                            </Button></a>

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

export default Marketplace;