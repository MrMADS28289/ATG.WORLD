import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <div className='mt-5 d-flex flex-column justify-content-center align-items-center text-danger'>
            <Spinner animation="border" />
            <p className='fs-4 ms-3'>Loading...</p>
        </div>
    );
};

export default Loading;