import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const SIgnInForm = ({ setUser, setShow1, reload }) => {

    const handleSignIn = (e) => {
        e.preventDefault();

        const userName = e.target.userName.value;
        const password = e.target.password.value;

        fetch(`http://localhost:5000/users/${userName}`)
            .then((res) => res.json())
            .then((user) => {
                if (user?.password === password) {
                    setUser(user);
                    localStorage.setItem('email', user?.email);
                    setShow1(false);
                    reload();
                    toast.success('SignIn success');
                }
                else {
                    toast.error('Wrong password');
                }
            });

    }

    return (
        <Form onSubmit={handleSignIn}>
            <Form.Control
                name='userName'
                type="text"
                required
                placeholder='Username'
            />
            <Form.Control
                name='password'
                type="password"
                required
                placeholder='Password'
            />
            <Button
                className='w-100 rounded-pill mt-2'
                variant="primary"
                type="submit"
            >Sign In</Button>
        </Form>
    );
};

export default SIgnInForm;