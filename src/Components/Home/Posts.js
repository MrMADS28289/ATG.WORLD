import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { MdCategory, MdEdit } from 'react-icons/md';
import { AiOutlineExclamationCircle, AiOutlineEye } from 'react-icons/ai';
import { BsFillShareFill, BsThreeDots, BsBag } from 'react-icons/bs';
import { RiCalendarEventLine } from 'react-icons/ri';
import forest from '../../Assets/forest.png';
import dor from '../../Assets/dor.png';
import taiar from '../../Assets/taiar.png';
import Post from './Post';

const Posts = () => {

    const posts = [
        {
            id: 1,
            catagory: 'Article',
            img: forest,
            title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
            desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to re loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, tenetur blanditiis pariatur esse expedita, provident iste accusantium possimus voluptatibus voluptatum inventore similique eveniet. Obcaecati aliquid recusandae corporis, expedita quos harum?',
            avater: 'https://i.ibb.co/HYV7sjt/leader2.jpg',
            name: 'Sarthak Kamra',
            view: '43k'
        },
        {
            id: 2,
            catagory: 'Education',
            img: dor,
            title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to reLorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, tenetur blanditiis pariatur esse expedita, provident iste accusantium possimus voluptatibus voluptatum inventore similique eveniet. Obcaecati aliquid recusandae corporis, expedita quos harum?',
            avater: 'https://i.ibb.co/LYFgZV1/team2.jpg',
            name: 'Sarah West',
            view: '53k'
        }
    ];

    return (
        <Container className='mt-4'>
            <Row>
                <Col className='col-12 col-md-8'>
                    {
                        posts.map(post => <Post key={post.id} post={post} />)
                    }

                    <div className='border border-2 me-5 mb-3'>
                        <div>
                            <img className='img-fluid' src={taiar} alt="forest" />
                        </div>
                        <div className='p-3'>
                            <h4 className='fs-5'><MdCategory /> Meetup </h4>
                            <Row>
                                <Col className='col-11'>
                                    <h3 className='fs-4'>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                                </Col>
                                <Col className='col-1'>
                                    <Button
                                        variant='light'
                                        className='p-0'>
                                        <BsThreeDots className='fs-5' />
                                    </Button>
                                </Col>
                            </Row>
                            <p className='fw-bold'>
                                <span className='me-5'><RiCalendarEventLine /> Fri, 12 Oct, 2018 </span>
                                <span><GoLocation /> Ahmedabad, India</span>
                            </p>
                            <Button className='w-100 bg-white border border-2 rounded-3 text-danger'>Visit Website</Button>
                            <Row className='d-flex justify-content-between'>
                                <Col className='col-8 d-flex align-items-center'>
                                    <img
                                        className='rounded-circle border border-3 me-2'
                                        height={40}
                                        src='https://i.ibb.co/n6KtQMN/team1.png'
                                        alt="avatar" />
                                    <h4 className='fs-5'>Sarah West</h4>
                                </Col>
                                <Col className='col-4 d-flex justify-content-between align-items-center'>
                                    <p className='fw-bold mt-3'><AiOutlineEye />64k views</p>
                                    <Button variant='light'>
                                        <BsFillShareFill className='fs-5' />
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className='border border-2 me-5 mb-3'>
                        <div className='p-3'>
                            <h4 className='fs-5'><MdCategory /> Job</h4>
                            <Row>
                                <Col className='col-11'>
                                    <h3 className='fs-4'>Software Developer</h3>
                                </Col>
                                <Col className='col-1'>
                                    <Button
                                        variant='light'
                                        className='p-0'>
                                        <BsThreeDots className='fs-5' />
                                    </Button>
                                </Col>
                            </Row>
                            <p className='fw-bold'>
                                <span className='me-5'><BsBag /> Innovaccer Analytics Private Ltd. </span>
                                <span><GoLocation />Noida, India</span>
                            </p>
                            <Button className='w-100 bg-white border border-2 rounded-3 text-info'>Apply on Timesjobs</Button>
                            <Row className='d-flex justify-content-between'>
                                <Col className='col-8 d-flex align-items-center'>
                                    <img
                                        className='rounded-circle border border-3 me-2'
                                        height={40}
                                        src='https://i.ibb.co/n6KtQMN/team1.png'
                                        alt="avatar" />
                                    <h4 className='fs-5'>Sarah West</h4>
                                </Col>
                                <Col className='col-4 d-flex justify-content-between align-items-center'>
                                    <p className='fw-bold mt-3'><AiOutlineEye />64k views</p>
                                    <Button variant='light'>
                                        <BsFillShareFill className='fs-5' />
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col className='d-none d-md-block mt-2'>
                    <p className='d-flex justify-content-between px-3 border-bottom border-2 fw-bold'>
                        <span><GoLocation /> Noida, India</span>
                        <MdEdit />
                    </p>
                    <div
                        style={{
                            color: "#868E96",
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{
                                height: '40px',
                                marginRight: '6px'
                            }}
                        >
                            <AiOutlineExclamationCircle />
                        </div>
                        <p>Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;