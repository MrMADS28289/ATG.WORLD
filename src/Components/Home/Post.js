import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillShareFill, BsThreeDots } from 'react-icons/bs';
import { MdCategory } from 'react-icons/md';

const Post = ({ post }) => {

    const { catagory, img, title, desc, avater, name, view } = post;
    return (
        <div className='border border-2 me-5 mb-3'>
            <div>
                <img className='img-fluid' src={img} alt="forest" />
            </div>
            <div className='p-3'>
                <h4 className='fs-5'><MdCategory /> {catagory} </h4>
                <Row>
                    <Col className='col-11'>
                        <h3 className='fs-4'>{title}</h3>
                    </Col>
                    <Col className='col-1'>
                        <Button
                            variant='light'
                            className='p-0'>
                            <BsThreeDots className='fs-5' />
                        </Button>
                    </Col>
                </Row>
                <p
                    style={{
                        color: "#868E96"
                    }}
                >{desc.slice(0, 70)}...</p>
                <Row className='d-flex justify-content-between'>
                    <Col className='col-8 d-flex align-items-center'>
                        <img
                            className='rounded-circle border border-3 me-2'
                            height={40}
                            src={avater}
                            alt="avatar" />
                        <h4 className='fs-5'>{name}</h4>
                    </Col>
                    <Col className='col-4 d-flex justify-content-between align-items-center'>
                        <p className='fw-bold mt-2'><AiOutlineEye />{view} views</p>
                        <Button variant='light'>
                            <BsFillShareFill className='fs-5' />
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Post;