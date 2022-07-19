import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUpForm = () => {

    const handleSignUp = (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;


        console.log(firstName, lastName, userName, email, password, confirmPassword);

    }

    return (
        <Form onSubmit={handleSignUp}>
            <div className='d-flex'>
                <Form.Control
                    required
                    name='firstName'
                    type="text"
                    placeholder='First Name'
                />
                <Form.Control
                    required
                    name='lastName'
                    type="text"
                    placeholder='Last Name'
                />
            </div>
            <Form.Control
                required
                name='userName'
                type="text"
                placeholder='Username'
            />
            <Form.Control
                required
                name='email'
                type="email"
                placeholder='Email'
            />
            <Form.Control
                required
                name='password'
                type="password"
                placeholder='Password'
            />
            <Form.Control
                required
                name='confirmPassword'
                type="password"
                placeholder='Confirm Password'
            />
            <Button
                className='w-100 rounded-pill mt-2'
                variant="primary"
                type="submit"
            >Create Account</Button>
        </Form>
    );
};

export default SignUpForm;