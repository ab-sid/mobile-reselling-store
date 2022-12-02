import React from 'react';
import img from '../../assets/nofound.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Page is Not Found</h1>
            <img className='w-full' src={img} alt="" srcset="" />
        </div>
    );
};

export default NotFound;