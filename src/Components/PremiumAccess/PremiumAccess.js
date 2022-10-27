import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext } from "react";

const PremiumAccess = () => {
    const {myStyle} = useContext(AuthContext);
    const data = useLoaderData();
    const {name, img, price} = data;
    return (
        <div style={myStyle} className="min-h-screen">
            <img className='w-1/3' src={img} alt=''></img>
            <h1 className='text-2xl font-bold'>{name}</h1>
        </div>
    );
};

export default PremiumAccess;