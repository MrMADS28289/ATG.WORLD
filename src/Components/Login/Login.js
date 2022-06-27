import React, { useState } from 'react';
import { Col, Container, Form, Row, } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    // const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    /*** Login System ***/
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            { /*** Login form part ***/}
            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-10 col-md-8 col-lg-6'>
                    <div className='my-4'>
                        <h2 className='text-center'>Welcome Back</h2>
                        <h6 className='text-center'>Please Login</h6>
                    </div>

                    <form onSubmit={handleLogin}>
                        <Form.Control
                            className='mb-3'
                            name='email'
                            type="text"
                            placeholder="Email"
                            required />
                        <Form.Control
                            className='mb-3'
                            name='password'
                            type="password"
                            placeholder="Password" />

                        {
                            error && <p className='text-danger'>{error}</p>
                        }

                        <input
                            style={{ backgroundColor: "#023047" }}
                            className='border-0 me-3 text-white px-3 py-2 fw-semibold w-100'
                            type="submit" value="Login" />

                        <div className='mt-3 d-flex flex-column justify-content-between'>
                            <Link
                                className='text-decoration-none'
                                to="/regester"
                            ><span className='text-black'>Haven't account?</span> Regester</Link>
                            <a
                                className='text-decoration-none'
                                href="/"
                            >Forget Password?</a>
                        </div>
                    </form>
                </Col>
            </Row>

            { /*** For React Toastify ***/}
            <ToastContainer />
        </>
    );
};

export default Login;