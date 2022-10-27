import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const data = useLoaderData();
    const {name, img, price} = data;
    console.log(data)
    return (
        <div>
            <img className='w-1/3' src={img} alt=''></img>
            <h1 className='text-2xl font-bold'>{name}</h1>
        </div>
    );
};

export default PremiumAccess;