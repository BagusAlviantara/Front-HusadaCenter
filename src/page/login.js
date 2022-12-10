
import { Form, Button, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import login from '../assets/image/husada.jpeg';
import "../App.css"
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
function ULogin() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    //login
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://api.husadacenter.id/login/', {
            email: email,
            password: password,
        }, { withCredentials: 'true' }).then((res) => {
            
            console.log(res.data.role)
            if(res.data.role === "Admin"){
                setMsg("Error!! Create new Account")
            }else{
                localStorage.setItem('isLogin', res.data.id);
                history.push("/dashboard");
            }
        }).catch((error) => {
            console.log(error)
            setMsg(error.response.data.msg)
        });
    }
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={login} alt="Login" />
                </div>
                <Form onSubmit={handleSubmit} className="login-form" >
                    <p className="form-title">Welcome back</p>
                    <p>Login to Bali Husada</p>
                    <p className="has-text-centered"></p>
                    {msg ? (
                        <div className="alert alert-danger text-center" role="alert">
                            {msg}
                        </div>)
                        : (<></>)}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Please input your email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder=" Please input your Password" />
                    </Form.Group>

                    {/* <antd.Form.Item name="remember" valuePropName="checked">
                        <antd.Checkbox>Remember me</antd.Checkbox>
                    </antd.Form.Item> */}

                    <Row className="mx-auto">
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                    </Row>

                    <div className="mt-4">Tidak Punya Akun? <a href="/register">Register</a></div>
                </Form>
            </div>
        </div>
    );
};

export default ULogin;