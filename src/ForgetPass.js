import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ForgetPass = () => {
    return (
        <Form>
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
            >Save Change</Button>
        </Form>
    );
};

export default ForgetPass;