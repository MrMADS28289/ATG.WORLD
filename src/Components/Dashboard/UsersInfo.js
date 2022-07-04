import React from 'react';
import { Button } from 'react-bootstrap';
import avatar2 from '../../Assets/avatar.png';
const UsersInfo = ({ user, setUser }) => {

    const { profile, avatar } = user;
    const { firstName, lastName } = profile;

    return (
        <div>
            <Button
                onClick={() => setUser(user)}
                variant="secondary"
                className='w-100 d-flex justify-content-lg-start text-black my-2 fw-bold'
            >
                <img
                    className='rounded-circle me-3'
                    height={40}
                    src={avatar && avatar2}
                    alt="" />
                {firstName + ' ' + lastName}
            </Button>
        </div>
    );
};

export default UsersInfo;