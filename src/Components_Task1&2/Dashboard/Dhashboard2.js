import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import UserInfo from './UserInfo';
import UsersInfo from './UsersInfo';
import avatar from '../../Assets/avatar.jpg';

const Dhashboard2 = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(1);
    const duser = { firstName: '', lastName: '', email: '', username: 'Loading...' };
    const { firstName, lastName, userName, email } = user || duser;

    useEffect(() => {
        axios.get('https://frozen-beach-46823.herokuapp.com/users')
            .then(res => {
                const users = res?.data;
                setUsers(users);
                setUser(users[0]);
                setLoading(null);
            })
            .catch(error => console.log(error?.message));
    }, [])
    // console.log(users)

    if (loading) {
        return <Loading />
    }

    return (
        <div
            style={{
                background: '#82878C',
                height: '100vh'
            }}
        >
            <div className='d-flex justify-content-between'>
                <Link to='/'
                    type="button"
                    class="btn btn-secondary ms-2 mt-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Go to ATG.WORLD">
                    <BsArrowLeft />
                </Link>
            </div>
            {
                users ?
                    <Row className='p-5 m-0'>
                        <Col
                            className='col-12 col-md-6'
                            style={{ background: '#82878C' }}
                        >
                            <Table striped hover>
                                <div>
                                    <p
                                        className='text-white text-center py-2 text-uppercase fs-4 fw-bold'
                                        style={{ background: '#82878C' }}
                                    > Users List</p>
                                </div>

                                <div>
                                    {
                                        users?.map(user => <div>
                                            <Button
                                                onClick={() => setUser(user)}
                                                variant="secondary"
                                                className='w-100 d-flex justify-content-lg-start text-black my-2 fw-bold'
                                            >
                                                <img
                                                    className='rounded-circle me-3'
                                                    height={40}
                                                    src={avatar}
                                                    alt="" />
                                                {user?.userName}
                                            </Button>
                                        </div>)
                                    }
                                </div>
                            </Table>
                        </Col>

                        <Col className='col-12 col-md-6 d-flex justify-content-center'>
                            <div className='w-100'>
                                <p
                                    className='text-white text-uppercase text-center py-2 fs-4 fw-bold'
                                    style={{
                                        background: '#82878C'
                                    }}>
                                    User Details
                                </p>

                                <div className='d-flex flex-column align-items-center border-2 border-top border-dark pt-3'>
                                    <img
                                        className='rounded-circle'
                                        height={180}
                                        width={180}
                                        src={avatar}
                                        alt="" />
                                    <p className='fs-4 m-0 mb-2'>{userName}</p>

                                    <div
                                        className='w-75 d-flex flex-column justify-content-center'
                                    >
                                        <p className='m-0 fs-5'>Full Name</p>
                                        <h3
                                            className='fs-5 p-2 border border-1 border-dark rounded-1'
                                            style={{
                                                background: '#DBDBDB'
                                            }}
                                        >{firstName + ' ' + lastName}</h3>

                                        <p className='m-0 fs-5'>Email</p>
                                        <h3
                                            className='fs-5 p-2 border border-1 border-dark rounded-1 overflow-hidden'
                                            title={email}
                                            style={{
                                                background: '#DBDBDB'
                                            }}
                                        >{email}</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    : <Loading />
            }

        </div>
    );
};

export default Dhashboard2;