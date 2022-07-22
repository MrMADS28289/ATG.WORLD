import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, NavLink, Row, Table } from 'react-bootstrap';
import Loading from '../Shared/Loading';
import UserInfo from './UserInfo';
import UsersInfo from './UsersInfo';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => {
                const users = res?.data;
                setUsers(users);
                setUser(users[0]);
                setLoading(null);
            })
            .catch(error => console.log(error?.message));
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div style={{ background: '#82878C' }}>
            <div className='d-flex justify-content-between'>
                <Link to='/home'
                    type="button"
                    class="btn btn-secondary ms-2 mt-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Go to ATG.WORLD">
                    <RiArrowGoBackLine />
                </Link>
                <Link to='/dhashboard'
                    type="button"
                    class="btn btn-secondary me-2 mt-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Go to ATG.WORLD">
                    <BsArrowRight />
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
                                        users?.map(user => <UsersInfo
                                            key={user?.id}
                                            user={user}
                                            setUser={setUser}
                                        />)
                                    }
                                </div>
                            </Table>
                        </Col>

                        <Col className='col-12 col-md-6 d-flex justify-content-center'>
                            <UserInfo
                                key={user?.id}
                                user={user}
                            />
                        </Col>
                    </Row>
                    : <Loading />
            }

        </div>
    );
};

export default Dashboard;