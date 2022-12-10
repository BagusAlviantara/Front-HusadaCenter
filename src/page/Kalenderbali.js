import React from "react";
import { useState, useEffect } from "react";
import { Card, Row, Col, Container, } from "react-bootstrap";
import { BalineseDate } from "balinese-date-js-lib";
import HeaderOff from "../notlogin/header";

const Kbali = () => {
    const [tnggal, setTnggl] = useState("");
    const [cari, setNew] = useState([]);
    var today = new Date();
    var tnkl = "Tue Oct 25 2022"
    
    console.log(tnkl)
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const now = new BalineseDate(today);

    console.log(now)
    return (
        <div>
            <div>
                <HeaderOff />
            </div>
            <Row className="mt-5">
                <Row >
                    <Container>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex flex-column px-3">
                                <label for="start">Search date:</label>
                                {/* <input type="date" id="start" placeholder="Search ..." onChange={(e) => setTnggl(e.target.value)} /> */}
                            </div>
                            <h1 className="text-center"> Kalender Bali</h1>
                            <div className="text-center" ><a href="/kjawa">Kalender Jawa</a> </div>
                        </div>
                    </Container>
                </Row>
                {tnggal ? <div>
                </div>
                    :
                    <div>
                        <Row className="p-3">
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <div className="text-center">
                                            <h3>Tanggal: <h3 className=" p-2"> {date}</h3></h3>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <div className="text-center">
                                            <h3>Sasih: <h3 className="p-2">{now.sasih.name} - {now.sasihDayInfo.name}</h3>
                                            </h3>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <div className="text-center">
                                            <h3>Wuku: <h3 className="p-2">{now.wuku.name} - urip: {now.wuku.urip}</h3>
                                            </h3>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <div className="text-center">
                                            <h3>Saka: <h3 className=" p-2">{now.saka}</h3>
                                            </h3>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Ekawara:  {now.ekaWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.ekaWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Dwiwara:  {now.dwiWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.dwiWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Triwara:  {now.triWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.triWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >caturWara:  {now.caturWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.caturWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Pancawara:  {now.pancaWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.pancaWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Sadwara:  {now.sadWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.sadWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Saptawara:  {now.saptaWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.saptaWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Astawara:  {now.astaWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.astaWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Sangawara:  {now.sangaWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.sangaWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                        <hr></hr>
                        <Container>
                            <Card className=" shadow">
                                <Card.Body className="text-center">
                                    <h3 >Dasawara:  {now.dasaWara.name}</h3>
                                    <p></p>
                                    <h3>Urip:    <span>{now.dasaWara.urip}</span></h3>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                }


            </Row>
            <div>

            </div>
        </div>
    );
};

export default Kbali;