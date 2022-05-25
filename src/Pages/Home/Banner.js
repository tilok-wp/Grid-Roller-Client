import React from 'react';

import bannerImage from '../../images/hero-banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero py-20 bg-base-200" style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundPosition: 'left center'

            }}>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-5xl font-bold">Quality First</h1>
                        <p className="py-6"><strong>Grid roller</strong> is the trading company or manufacturer. We are <strong>manufacturing</strong> different types of paint Roller. welcome to visit our factory</p>
                        <a href="#contact" className="btn btn-primary text-white"> Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;