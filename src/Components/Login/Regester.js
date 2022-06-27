import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Col, Form, Row, ToastContainer } from 'react-bootstrap';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const Regester = () => {

    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    /*** Handle form submit ***/
    const handleRegester = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;
        console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            setError('');
        }
        else {
            setError('Password and confirm password does not match')
        }

    }

    return (
        <>
            { /*** Login form part ***/}
            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-10 col-md-8 col-lg-6'>
                    <div className='my-4'>
                        <h2 className='text-center'>Please Regester</h2>
                    </div>

                    <form onSubmit={handleRegester}>
                        <Form.Control
                            className='mb-3'
                            name='name'
                            type="text"
                            placeholder="Full Name"
                            required />
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
                        <Form.Control
                            className='mb-3'
                            name='confirm_password'
                            type="password"
                            placeholder="Confirm Password" />

                        {
                            error && <p className='text-danger'>{error || error1}</p>
                        }

                        <input
                            style={{ backgroundColor: "#023047" }}
                            className='border-0 me-3 text-white px-3 py-2 fw-semibold w-100'
                            type="submit" value="Regester" />

                        <div className='mt-3 d-flex flex-column justify-content-between'>
                            <Link
                                className='text-decoration-none'
                                to="/login"
                            ><span className='text-black'>Already have an account?</span> Please Login</Link>
                        </div>
                    </form>
                </Col>
            </Row>

            { /*** For React Toastify ***/}
            <ToastContainer />
        </>
    );
};

export default Regester;