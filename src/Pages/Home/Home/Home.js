import React from 'react';
import Banner from '../Banner/Banner';
import InclusivePackages from '../InclusivePackages/InclusivePackages';

import Services from '../Services/Services';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <InclusivePackages> </InclusivePackages>
        </>
    );
};

export default Home;