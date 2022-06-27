import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {

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
                            to="dashboard"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >Dashboard</NavLink>
                        <NavLink
                            to="login"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >Login</NavLink>
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