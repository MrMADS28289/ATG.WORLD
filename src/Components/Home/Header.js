import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdGroupAdd } from 'react-icons/md';

const Header = () => {
    return (
        <Container className='d-none d-md-flex justify-content-between mt-3 border-bottom border-1'>
            <Nav
                className='border-bottom-0 fw-bold'
                variant="tabs"
                defaultActiveKey="/all-posts">
                <Nav.Item>
                    <Nav.Link href="/all-posts">All Posts(32)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Article</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Event</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Job</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='mb-2'>
                <Button variant="light" className='me-2 fw-bold'>Write a Post <IoMdArrowDropdown /></Button>
                <Button className='fw-bold'><MdGroupAdd /> Join Group</Button>
            </div>
        </Container>
    );
};

export default Header;