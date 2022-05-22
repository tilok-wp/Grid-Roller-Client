import React from 'react';

const Preloader = () => {
    return (
        <div className=" flex justify-center items-center flex-col py-24">
            <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-orange-400"></div>
            <p className='top-[-80px] relative'>Loading ...</p>
        </div>
    );
};

export default Preloader;