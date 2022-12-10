
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import profile from '../assets/image/profile-png.png'
import axios from "axios";
import "../App.css"
import Headerlog from "../aflogin/header";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [Iid, setIId] = useState("");
    const id = localStorage.getItem('isLogin');

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get("https://api.husadacenter.id/customer/"+id, { withCredentials: 'true' })
            .then((response) => {
                setIId(response.data.id);
                setName(response.data.name);
                setAddress(response.data.address);
                setPhone(response.data.phone);
                setGender(response.data.gender);
                setAge(response.data.age);
            });
    };
    const updateData = async (id) => {
        axios.patch("https://api.husadacenter.id/customer/"+Iid, {
            name: name,
            address: address,
            gender: gender,
            phone: phone,
            age: age
        }, { withCredentials: true })
            .then(
                (res) => {
                console.log(res)   
                }
            ).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <Headerlog/>
            <div className="d-center">
                <Card className="p-3" style={{ background: '#13653f' }}>

                    <Form className="text-white" onSubmit={updateData}>
                        <h3>Edit Profile</h3>
                        <hr></hr>
                        <div className="text-center"> <img src={profile} alt="Logo" className="foto mb-2 center" /></div>
                        {/* personal imformation  */}
                        <Form.Group className="mb-2" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="ex: Aisaka Yuzu" value={name} onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPhone">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicALamat">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" placeholder="ex: Indonesia" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" value={gender} onChange={(e) => setGender(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Umur</Form.Label>
                            <Form.Control type="number" placeholder="Enter email" value={age} onChange={(e) => setAge(e.target.value)}/>
                        </Form.Group>
                        <Row>
                            <Button className="btn btn-outline-primary btn-lg btn-block text-white" type="submit">
                                Save Changes
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </div>

        </>
    );
};

export default Profile;