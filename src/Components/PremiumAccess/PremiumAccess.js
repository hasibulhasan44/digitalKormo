import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext } from "react";

const PremiumAccess = () => {
    const {myStyle} = useContext(AuthContext);
    const data = useLoaderData();
    const {name, img, price, details} = data;
    return (
        <div style={myStyle} className="min-h-screen">
            <img className='lg:w-1/3 w-2/4' src={img} alt=''></img>
            <h1 className='text-2xl font-bold'>Name: <span className='text-xl'>{name}</span></h1>
            <h1 className='text-2xl font-bold'>Price: <span className='text-xl'>{price}</span>$</h1>
            <p>Details: {details.description}</p>
        </div>
    );
};

export default PremiumAccess;