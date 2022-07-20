import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ForgetPass = ({ handleShow, handleClose2 }) => {

    const handleFrogetPass = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        fetch(`https://frozen-beach-46823.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        // e.target.reset();
        // show2(false);
        handleClose2();
        handleShow();
        toast.success('Password reset completed');
    }

    return (
        <Form onSubmit={handleFrogetPass}>
            <Form.Control
                name='email'
                type="email"
                required
                placeholder='Email'
            />
            <Form.Control
                name='password'
                type="password"
                required
                placeholder='New Password'
            />
            <Button
                className='w-100 rounded-pill mt-2'
                variant="primary"
                type="submit"
            >Save Change</Button>
        </Form>
    );
};

export default ForgetPass;