import React from 'react';

const FaqSection = () => {
    return (
        <section className='py-20 px-3 bg-slate-50'>
            <h2 className="text-3xl font-semibold uppercase mb-10 text-center">Basic Faq</h2>
            <div className='container'>
                <div className='w-full md:w-1/3 mx-auto'>
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div class="collapse-title text-xl font-medium">
                            Can I pre order your product.
                        </div>
                        <div class="collapse-content">
                            <p>Yes. You can pre order our product. </p>
                        </div>
                    </div>
                    <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="4" class="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-3">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;