import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillShareFill, BsThreeDots } from 'react-icons/bs';
import { MdCategory } from 'react-icons/md';
import avatar from '../../Assets/avatar.jpg';

const Post = ({ post, setReload, reload }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const { _id, type, img, title, pragraph, avater, name, views, liked: like } = post;
    const [reload1, setReload1] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://frozen-beach-46823.herokuapp.com/comments/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [post, reload1])

    const handleLike = () => {
        let liked = true;
        if (like) {
            liked = false;
        }

        fetch(`https://frozen-beach-46823.herokuapp.com/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ liked }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        setReload(!reload)
    }

    const handleComment = e => {
        e.preventDefault();

        const commentText = e.target.comment.value;
        const id = _id;
        const comment = { commentText, id }

        fetch(`https://frozen-beach-46823.herokuapp.com/comment`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(comment),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        setReload1(!reload1)
        e.target.reset();
    }

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
                    <Col className='col-5 d-flex align-items-center'>
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
                    <Col className='col-7 d-flex justify-content-between align-items-center'>
                        <p className='mt-2 d-none d-md-block'><AiOutlineEye />{views} views</p>
                        <Button variant='light d-flex'>
                            <BsFillShareFill className='fs-5 me-2' />
                            <span className='d-md-none'>Share</span>
                        </Button>
                        <Button
                            variant={like ? 'primary' : 'light'}
                            onClick={handleLike}
                        >Like
                        </Button>
                        <Button
                            variant='light d-flex'
                            onClick={() => handleShow()}
                        >Comments
                        </Button>
                    </Col>
                </Row>

                {/* Comments modal */}
                <Modal
                    size='lg'
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header
                        closeButton
                    >
                        <h4>Comments</h4>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            comments.map(comment => <p
                                key={comment._id}
                                className='border border-2 my-2 p-2 rounded'
                            >{comment?.commentText}
                            </p>)
                        }
                        <Form onSubmit={handleComment}>
                            <Form.Control
                                name='comment'
                                type="text"
                                required
                                placeholder='Write a comment'
                            />
                            <Button
                                className='w-100 rounded-pill mt-2'
                                variant="primary"
                                type="submit"
                            >Comment</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Post;