import React, { useState } from 'react';
import { Navbar, Container, Form, FormControl, Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../Assets/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { BiDownArrow, BiCircle, BiRectangle } from 'react-icons/bi';
import d_log from '../../Assets/d_log.png';
import { RiArrowGoBackLine } from 'react-icons/ri';
import SignUpForm from './SignUpForm';
import SIgnInForm from './SIgnInForm';

const NavBar = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);
    const handleShow = () => setShow1(true);

    return (
        <Navbar bg="white" expand="lg">
            <Container className='d-flex justify-content-between d-none d-md-flex'>
                <Navbar.Brand href="#">
                    <Link to='/'><img height={30} src={logo} alt="ATG-logo" /></Link>
                </Navbar.Brand>

                <Form
                    className="d-flex align-items-center rounded-pill px-3"
                    style={{
                        width: "370px",
                        backgroundColor: "#F2F2F2"
                    }}
                >
                    <AiOutlineSearch hanging={30} />
                    <FormControl
                        style={{ backgroundColor: "#F2F2F2" }}
                        type="search"
                        placeholder="Search for your favorite groups in ATG"
                        className="me-2 border-0"
                        aria-label="Search"
                    />
                </Form>

                <button
                    className='border-0 bg-white'
                    onClick={() => setShow(true)}
                >
                    Create account. <span className='fw-bold text-primary'>It's free!</span> <IoMdArrowDropdown />
                </button>
            </Container>
            <Container className='d-flex justify-content-between d-md-none'>
                <button
                    className='border-0 bg-white'
                    onClick={() => setShow(true)}
                >
                    Create account. <span className='fw-bold text-primary'>It's free!</span> <IoMdArrowDropdown />
                </button>
                <div>
                    <BiRectangle /> <BiCircle /> <BiDownArrow />
                </div>
            </Container>

            {/* Create account Modal */}
            <Modal
                size='lg'
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header
                    closeButton
                    style={{ background: '#EFFFF4' }}
                >
                    <p
                        style={{
                            color: "#37C172"
                        }}
                    >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                        <h3>Create Account</h3>
                        <p>Already have an account? <button
                            className='border-0 bg-white text-primary'
                            onClick={() => {
                                setShow(false);
                                handleShow();
                            }}
                        >Sign In</button></p>
                    </div>

                    <Row>
                        <Col className='col-12 col-md-6'>
                            <SignUpForm />

                            <div className='mt-3'>
                                <Button
                                    className='w-100 bg-white border border-2 rounded-3 text-black'
                                ><RiFacebookCircleFill /> Sign up with Facebook</Button>

                                <Button
                                    className='w-100 bg-white border border-2 rounded-3 mt-2 text-black'
                                ><FcGoogle /> Sign up with Google</Button>
                            </div>
                        </Col>
                        <Col className='col-6 d-none d-md-block mt-3'>
                            <img className='img-fluid' src={d_log} alt="" />
                            <p
                                style={{
                                    fontSize: '12px',
                                    color: '#ADB5BD'
                                }}
                                className=''>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            {/* Sign in modal */}
            <Modal
                size='lg'
                show={show1}
                onHide={handleClose}
                animation={false}
            >

                <Modal.Header
                    closeButton
                    style={{ background: '#EFFFF4' }}
                >
                    <p
                        style={{
                            color: "#37C172"
                        }}
                    >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </Modal.Header>

                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                        <h3>Sign In</h3>
                        <p>Don’t have an account yet? <button
                            className='border-0 bg-white text-primary'
                            onClick={() => {
                                setShow(true);
                                handleClose();
                            }}
                        >Create new for free!</button></p>
                    </div>

                    <Row>
                        <Col className='col-12 col-md-6'>
                            <SIgnInForm />

                            <div className='mt-3'>
                                <Button
                                    className='w-100 bg-white border border-2 rounded-3 text-black'
                                ><RiFacebookCircleFill /> Sign in with Facebook</Button>

                                <Button
                                    className='w-100 bg-white border border-2 rounded-3 mt-2 text-black'
                                ><FcGoogle /> Sign in with Google</Button>
                                <p className='fw-bold text-center mt-3'>Forgot Password?</p>
                            </div>
                        </Col>
                        <Col className='col-6 d-none d-md-block mt-3'>
                            <img className='img-fluid' src={d_log} alt="" />
                            <p
                                style={{
                                    fontSize: '12px',
                                    color: '#ADB5BD'
                                }}
                                className=''>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
};

export default NavBar;