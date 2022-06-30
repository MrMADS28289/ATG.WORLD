import React from 'react';
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../Assets/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiDownArrow, BiCircle, BiRectangle } from 'react-icons/bi';

const NavBar = () => {

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

                <Link to='/login'
                    className='text-decoration-none text-black'
                >
                    Create account. <span className='fw-bold text-primary'>It's free!</span> <IoMdArrowDropdown />
                </Link>
            </Container>
            <Container className='d-flex justify-content-end d-md-none'>
                <div>
                    <BiRectangle /> <BiCircle /> <BiDownArrow />
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;