import React, { useEffect, useState } from 'react';
import { Button, Container, Dropdown, Form, Modal } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdGroupAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

const Header = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [user, setUser] = useState({});
    const email = localStorage.getItem('email');
    // console.log(user);

    const imgUploadKey = '3996d247e584371424e08ccdd45a1e9f';

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [email]);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const reload = () => {
        window.location.reload();
    }

    const handlePost = async e => {
        e.preventDefault();

        const title = e.target.title.value;
        const pragraph = e.target.pragraph.value;
        const img = e.target.img.files[0];
        const type = e.target.type.value;
        const name = user?.userName;

        const url = `https://api.imgbb.com/1/upload?key=${imgUploadKey}`;
        const formData = new FormData();
        formData.append('image', img);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const post = { title, pragraph, img: image, type, views: 0, name };
                    fetch('http://localhost:5000/post', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(post),
                    })
                        .then((res) => res.json())
                        .then((data) => console.log(data));

                    handleClose();
                    toast.success('Post success');
                    reload();
                }
            })
    }

    return (
        <>
            <Container className='d-none d-md-flex justify-content-between mt-3 border-bottom border-1'>
                <Nav
                    className='border-bottom-0 fw-bold'
                    variant="tabs"
                    defaultActiveKey="/all-posts">
                    <Nav.Item>
                        <Nav.Link href="/all-posts">All Posts({posts?.length})</Nav.Link>
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
                    <Button
                        onClick={() => handleShow()}
                        variant="light"
                        className='me-2 fw-bold'
                    >Write a Post <IoMdArrowDropdown /></Button>
                    <Button className='fw-bold'><MdGroupAdd /> Join Group</Button>
                </div>
            </Container>
            <Container className='d-flex d-md-none justify-content-between mt-3'>
                <h4>All Posts(32)</h4>
                <Button variant="light" className='me-2 fw-bold'>Filter: All <IoMdArrowDropdown /></Button>
            </Container>

            {/* Create post modal */}
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
                    <h3 className='text-info'>Write a post</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlePost}>
                        <Form.Control
                            name='title'
                            type="text"
                            required
                            placeholder='Title'
                        />
                        <Form.Control
                            name='pragraph'
                            type="text"
                            required
                            placeholder='Pragraph'
                        />
                        <Form.Control
                            name='img'
                            type="file"
                            required
                        />
                        <select
                            name='type'
                            className='w-100 border border-light'
                            id="ddlViewBy">
                            <option value="Article" selected="selected">Article</option>
                            <option value="Education" >Education</option>
                            <option value="Meetup">Meetup</option>
                            <option value="Job">Job</option>
                        </select>
                        <Button
                            className='w-100 rounded-pill mt-2'
                            variant="primary"
                            type="submit"
                        >Post</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;