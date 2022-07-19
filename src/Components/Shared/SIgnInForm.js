import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SIgnInForm = () => {
    return (
        <Form>
            <Form.Control
                type="email"
                required
                placeholder='Email or Username'
            />
            <Form.Control
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