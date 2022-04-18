import React from 'react';
import hotel1 from '../../../images/inclusive_packages/hotel-1.jpg';
import hotel2 from '../../../images/inclusive_packages/hotel-2.jpg';
import hotel3 from '../../../images/inclusive_packages/hotel-3.jpg';
import InclusivePackage from '../InclusivePackage/InclusivePackage';

const inclusivPackages = [
    { id: 1, name: 'La Casa', img: hotel1 },
    { id: 2, name: 'Hotel Victoria', img: hotel2 },
    { id: 3, name: 'Queens Hotel', img: hotel3 }
]
const InclusivePackages = () => {
    return (
        <div id='inclusivePackages' className='container'>
            <h1 className='text-primary text-center mt-4 text-success'> Inclusive packages </h1>
            <div className="row">
                {
                    inclusivPackages.map(inclusivPackage => <InclusivePackage
                        key={inclusivPackage.id}
                        inclusivPackage={inclusivPackage}
                    ></InclusivePackage>)
                }
            </div>
        </div>
    );
};

export default InclusivePackages;