import React from 'react';

const FaqSection = () => {
    return (
        <section className='py-20 px-3 bg-slate-50'>
            <h2 className="text-3xl font-semibold uppercase mb-10 text-center">Basic Faq</h2>
            <div className='container mx-auto'>
                <div className='w-full md:w-1/3 mx-auto'>
                    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div className="collapse-title text-xl font-medium">
                            Can I pre order your product?
                        </div>
                        <div className="collapse-content">
                            <p>Yes. You can pre order our product. </p>
                        </div>
                    </div>
                    <div tabIndex="1" className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div className="collapse-title text-xl font-medium">
                            Did you provide custom design product?
                        </div>
                        <div className="collapse-content">
                            <p>Yes. You can provide your design first we measure it. and I let you know.</p>
                        </div>
                    </div>
                    <div tabIndex="2" className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div className="collapse-title text-xl font-medium">
                            Can I get some Sample product?
                        </div>
                        <div className="collapse-content">
                            <p>First you complete deal. then we provide the sample product.</p>
                        </div>
                    </div>
                    <div tabIndex="3" className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div className="collapse-title text-xl font-medium">
                            Do you have return policy.
                        </div>
                        <div className="collapse-content">
                            <p>If the product not fulfill your deal requirement, we return it.</p>
                        </div>
                    </div>
                    <div tabIndex="4" className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div className="collapse-title text-xl font-medium">
                            Did you deliver order others country?
                        </div>
                        <div className="collapse-content">
                            <p>No our product is dalivered avaliable in our country. If you want you can do it your own process</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;