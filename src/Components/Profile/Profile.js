import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import avatar from '../../Assets/avatar.png';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Profile = () => {

    const [user] = useAuthState(auth);
    const [user1, setUser] = useState({});
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [user, refresh]);

    // Password Reset
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (sending) {
        toast.success('working on it')
    }
    if (error) {
        toast.error(error?.message);
    }

    // Modal for update profile
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle update profile info
    const handleUpdate = e => {
        e.preventDefault();
        const email = e.target.email.value || user1?.email;
        const name = e.target.name.value || user1?.name;
        const img = e.target.img.value || user?.photoURL;
        const profile = { name, email, img }

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Yay! edit Success')
                console.log(data);
            })

        setRefresh(!refresh);
        handleClose(true);
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img className='rounded-circle mt-3 border border-1 border-info' height='100px' width='100px' src={user1?.img ? user1?.img : avatar} alt="" />
            </div>
            <div className='mt-3'>
                <p>Name: {user1?.name}</p>
                <p>Email: {user1?.email}</p>
                <Button
                    variant='light'
                    className='m-3 ms-0'
                    onClick={async () => {
                        await sendPasswordResetEmail(user?.email);
                        toast.success('Please check your email');
                    }}
                >
                    Change password
                </Button>

                {/* Modal open button */}
                <Button variant="primary" onClick={handleShow}>
                    Edit Profile
                </Button>

                {/* Modal */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleUpdate}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='name'
                                    placeholder={user1?.name}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    value={user1?.email}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='img'
                                    placeholder='Image url'
                                    autoFocus
                                />
                            </Form.Group>
                            <input
                                style={{ backgroundColor: "#023047" }}
                                className='border-0 me-3 text-white px-3 py-2 fw-semibold w-100'
                                type="submit"
                                value="Save Change" />
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </Container>
    );
};

export default Profile;