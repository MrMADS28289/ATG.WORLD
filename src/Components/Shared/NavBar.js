import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const NavBar = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // Active Link Style 
    const activeStyle = {
        color: "black",
        marginRight: "10px"
    };

    // Inactive Link Style
    const inactiveStyle = {
        color: "gray",
        textDecoration: "none",
        marginRight: "10px"
    };

    const handleLogout = () => {
        signOut(auth);
        navigate('/');
        toast.success('Logout Success')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Inventory Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >Home</NavLink>
                        <NavLink
                            to="/products"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >Products</NavLink>
                        <NavLink
                            to="/dashboard"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >Dashboard</NavLink>
                        <NavLink
                            to="/profile"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >Profile</NavLink>

                        {
                            user ? <Button
                                variant="light"
                                className='m-0 p-0'
                                onClick={handleLogout}
                            >Logout</Button> :
                                <NavLink
                                    to="login"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                    }
                                >Login</NavLink>
                        }
                    </Nav>

                    {/* Search Section */}
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;