import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { packageId } = useParams();
    return (
        <div>
            <h2>detail :{packageId}</h2>
        </div>
    );
};

export default Detail;