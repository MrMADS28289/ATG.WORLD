import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Regester = () => {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading />;
    }
    if (error1) {
        toast.error(error1?.message);
        setError(error1?.message)
    }
    if (user) {
        navigate(from, { replace: true });
        toast.success('Regester Success.')
    }

    /*** Handle form submit ***/
    const handleRegester = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;
        const user = { name, email };
        // console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);

            // send user info to mongodb
            fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));

            setError('');
            e.target.reset();
        }
        else {
            setError('Password and confirm password does not match')
        }

    }

    return (
        <>
            { /*** Regester form part ***/}
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
                            error && <p className='text-danger'>{error}</p>
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
        </>
    );
};

export default Regester;