import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillShareFill, BsThreeDots } from 'react-icons/bs';
import { MdCategory } from 'react-icons/md';
import avatar from '../../Assets/avatar.jpg';

const Post = ({ post }) => {

    const { type, img, title, pragraph, avater, name, views } = post;
    return (
        <div className='border border-2 me-5 mb-3'>
            <div>
                <img className='img-fluid' src={img} alt="forest" />
            </div>
            <div className='p-3'>
                <h4 className='fs-5'><MdCategory /> {type} </h4>
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
                >{pragraph.slice(0, 70)}...</p>
                <Row className='d-flex justify-content-between'>
                    <Col className='col-8 d-flex align-items-center'>
                        <img
                            className='rounded-circle border border-3 me-2'
                            height={40}
                            src={avater || avatar}
                            alt="avatar" />
                        <div>
                            <h4 className='fs-5'>{name}</h4>
                            <p className='m-0 d-block d-md-none'>{views} views</p>
                        </div>
                    </Col>
                    <Col className='col-4 d-flex justify-content-between align-items-center'>
                        <p className='mt-2 d-none d-md-block'><AiOutlineEye />{views} views</p>
                        <Button variant='light d-flex'>
                            <BsFillShareFill className='fs-5 me-2' />
                            <span className='d-md-none'>Share</span>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Post;