import React from 'react';
import avatar2 from '../../Assets/avatar.jpg';

const UserInfo = ({ user }) => {

    const duser = { firstName: '', lastName: '', email: '', username: 'Loading...' }
    const { jobTitle, Bio, profile, avatar } = user;
    const { firstName, lastName, username, email } = profile || duser;

    return (
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
                    src={avatar && avatar2}
                    alt="" />
                <p className='fs-3 m-0'>{username}</p>

                <div className='w-75 d-flex flex-column justify-content-center'>
                    <p
                        style={{
                            background: '#DBDBDB'
                        }}
                        className='fs-5 p-2 mt-3 border border-1 border-dark rounded-1'
                    >{Bio}</p>

                    <p className='m-0 fs-4'>Full Name</p>
                    <h3
                        className='fs-4 p-2 border border-1 border-dark rounded-1'
                        style={{
                            background: '#DBDBDB'
                        }}
                    >{firstName + ' ' + lastName}</h3>

                    <p className='m-0 fs-4'>Job Title</p>
                    <h3
                        className='fs-4 p-2 border border-1 border-dark rounded-1'
                        style={{
                            background: '#DBDBDB'
                        }}
                    >{jobTitle}</h3>

                    <p className='m-0 fs-4'>Email</p>
                    <h3
                        className='fs-4 p-2 border border-1 border-dark rounded-1'
                        style={{
                            background: '#DBDBDB'
                        }}
                    >{email}</h3>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;