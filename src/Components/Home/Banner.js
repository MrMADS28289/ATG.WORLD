import React from 'react';
import { Button, Container } from 'react-bootstrap';
import computer from '../../Assets/computer.jpg';

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${computer})`,
                height: '400px'
            }}
        >
            <div
                style={{
                    background: 'black',
                    opacity: '0.7',
                    height: '100%'
                }}
            >
                <Container>
                    <div className='d-flex justify-content-end d-md-none'>
                        <Button
                            className='text-white border-white fw-bold mt-5'
                            variant="outline-info"
                        >Join group</Button>
                    </div>
                    <div
                        style={{ paddingTop: '200px' }}
                        className='text-white ms-5'
                    >
                        <h2>Computer Engineering</h2>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;