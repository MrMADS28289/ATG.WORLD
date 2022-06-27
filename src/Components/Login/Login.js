import React, { useState } from 'react';
import { Col, Form, Row, } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {

    const [email, setEmail] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
        return <Loading />;
    }
    if (error || error1) {
        toast.error(error?.message || error1?.message);
    }
    if (user) {
        navigate(from, { replace: true });
        toast.success('Login Success.')
    }

    /*** Login System ***/
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        setEmail(email);
        e.target.reset();
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

                        <input
                            style={{ backgroundColor: "#023047" }}
                            className='border-0 me-3 text-white px-3 py-2 fw-semibold w-100'
                            type="submit" value="Login" />

                        <div className='mt-3 d-flex flex-column justify-content-between'>
                            <Link
                                className='text-decoration-none'
                                to="/regester"
                            ><span className='text-black'>Haven't account?</span> Regester</Link>
                            <div>
                                <button
                                    className='text-decoration-none text-danger m-0 p-0 border-0 bg-white'
                                    onClick={async () => {
                                        await sendPasswordResetEmail(email);
                                        toast.success('Password email sent');
                                    }}
                                >Forget Password?</button>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    );
};

export default Login;