import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToDetail = id => {
        navigate(`/package/${(id)}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Packages:{name}</h2>
            <p>Price: £{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToDetail(id)} className='btn btn-success'>Book: {name}</button>
        </div>
    );
};

export default Service;