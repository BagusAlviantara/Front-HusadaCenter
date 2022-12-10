
import { Form, Button, Row } from "react-bootstrap";
import React from "react";
import login from '../assets/image/husada.jpeg';
import { useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [full_name, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('Customer');
    const [msg, setMsg] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://api.husadacenter.id/users/', {
            name: full_name,
            phone: phone,
            email: email,
            password: password,
            confPassword: confPassword,
            role: role
        }, { withCredentials: 'true' }).then(() => {
            history.push("/login");
        }).catch((error) => {
            console.log(error)
            setMsg(error.response.data.msg)
        });
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={login} alt="Login" style={{ height: '640px' }} />
                </div>
                <Form className="login-form" onSubmit={handleSubmit}
                >
                    <p className="form-title">Create Account</p>
                    <p>Register Here</p>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Please input your email" onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicNama">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control onChange={(e) => setFullname(e.target.value)} type="text" placeholder=" Please input your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicNumber">
                        <Form.Label>No HP</Form.Label>
                        <Form.Control onChange={(e) => setPhone(e.target.value)} type="number" placeholder=" Please input your number" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder=" Please input your Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicConfPassword">
                        <Form.Label className="d-flex justify-content-between">
                            <div>CONFIRM PASSWORD </div>
                        </Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" className="formColor required"
                            onChange={(e) => setConfPassword(e.target.value)} value={confPassword}
                        />
                    </Form.Group>
                    <Row className="mx-auto">
                        <Button variant="success" size="lg" type="submit" >
                            Save
                        </Button>
                    </Row>

                    <div className="mt-3">Punya akun? <a href="/login">Login</a></div>
                </Form>
            </div>
        </div>
    );
};

export default Register;