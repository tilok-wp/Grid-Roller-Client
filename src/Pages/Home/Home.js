import React from 'react';
import PageTitle from '../../utility/PageTitle';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import FaqSection from './FaqSection/FaqSection';
import ProductSection from './ProductSection/ProductSection';
import Reviews from './Reviews';
import SupportSection from './SupportSection/SupportSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <ProductSection></ProductSection>
            <Reviews></Reviews>
            <FaqSection></FaqSection>
            <SupportSection></SupportSection>
            <PageTitle title="Home"></PageTitle>
        </div>
    );
};

export default Home;