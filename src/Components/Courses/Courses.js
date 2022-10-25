import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Courses = () => {
    const {myStyle} = useContext(AuthContext);

    return (
        <div style={myStyle} className='min-h-screen'>
            <h3>this is courses</h3>
        </div>
    );
};

export default Courses;