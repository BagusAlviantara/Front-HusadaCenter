import React from "react";
import { useEffect, useState } from "react";
import { Nav, Navbar, Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
import satu from '../assets/image/images.jpg';
import dua from '../assets/image/images1.png';
import tiga from '../assets/image/images2.png';
import pengobatan from '../assets/image/pengobatan.jpg';
import "../App.css";
import { Link } from "react-router-dom";
import HeaderOff from "../notlogin/header";
import axios from "axios";


function Landing() {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get("https://api.husadacenter.id/tanaman", { withCredentials: 'true' })
            .then((response) => {
                setData(response.data);
                console.log(data)
            });
    };
    const Layanan = [{
        nama: "Pengobatan",
        label: "pengobatan",
        link: "/login"
    }, {
        nama: "Alternatif",
        label: "alternatif",
        link: "/login"
    }, {
        nama: "Jasa Populer",
        label: "populer",
        link: "/login"

    }, {
        nama: "Marketplace",
        label: "marketplace",
        link: "/login"
    }];
    return (
        <div>
            <HeaderOff />
            <div>
    
                <Carousel activeIndex={index} onSelect={handleSelect} >

                    <Carousel.Item >
                        <img style={{ height: "560px" }}
                            className="d-block w-100"
                            src={dua}
                            url
                            alt="First slide"
                        />
                        <Carousel.Caption style={{ color: "black" }} className="shadow p">
                            {/* <h3>Slide Pertama</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "560px" }}
                            className="d-block w-100"
                            src={satu}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{ color: "black" }} className="shadow p">
                            {/* <h3>Slide Kedua</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "560px" }}
                            className="d-block w-100"
                            src={tiga}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{ color: "black" }} className="shadow p">
                            {/* <h3>Slide Ketiga</h3>
                            <p>
                                deskripsi
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className=" d-flex flex-row mt-5 mb-5">
                    <Container className="" >
                        <Row className="justify">
                            {Layanan.map((item, key) =>
                                <Col  xs={12} md={6} lg={3} >
                                    <Card  className=" d-flex flex-row justify-content-between " key={key} >
                                        <Card.Body style={{background: '#13653f'}}>
                                            <Card.Title style={{ fontSize: '15px' }}>{item.nama}</Card.Title>
                                            {/* <Card.Text>
                                            {item.label}
                                        </Card.Text> */}
                                            <Button variant="primary" href={item.link}>Go</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>

            <Container className="shadow px- mb-5 blue" >
                <h3 className="text-center p-5">Informasi Tanaman dan Obat Tradisional</h3>
                <Row  className="">
                        {data.map((item, key) =>
                            <Col xs={12} md={6} lg={4} className='text-center px-3'>
                                <Card className="obtoffe mb-5" key={key} >
                                    <div className="mt-3"><img src={item.URL} alt="drive image" style={{ height: '150px', width: '250px' }}/></div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.latin_name}</Card.Title>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.local_name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                <div className="mt-5 text-center text-white pb-3"><a href="#" > Login For More Content</a></div>

            </Container>
        </div>
    );
}

export default Landing;