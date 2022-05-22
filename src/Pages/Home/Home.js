import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ProductSection from './ProductSection/ProductSection';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;