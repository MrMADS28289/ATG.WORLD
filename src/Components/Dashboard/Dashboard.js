import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Loading from '../Shared/Loading';
import UserInfo from './UserInfo';
import UsersInfo from './UsersInfo';

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => {
                const users = res?.data;
                setUsers(users);
                setUser(users[0])
            })
            .catch(error => setError(error?.message))
    }, [])


    console.log(users);

    return (
        <div
            style={{
                background: '#82878C'
            }}>
            {
                users ? <Row className='p-5'>
                    <Col className='col-12 col-md-6'
                        style={{
                            background: '#82878C'
                        }}>
                        <Table striped hover className='bg-white'>
                            <div>
                                <p
                                    className='text-white text-center py-2 text-uppercase fs-4 fw-bold'
                                    style={{
                                        background: '#82878C'
                                    }}>
                                    Users List
                                </p>
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

                    <Col className='col-12 col-md-6 d-flex justify-content-center bg-white'>
                        <UserInfo
                            key={user?.id}
                            user={user}
                        />
                    </Col>
                </Row> : <Loading />
            }

        </div>
    );
};

export default Dashboard;