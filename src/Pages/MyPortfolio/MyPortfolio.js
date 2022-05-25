import React from 'react';
import photo from '../../images/Photo.jpg'


const MyPortfolio = () => {
    return (
        <section className='py-20 px-3'>

            <div className='container w-full md:w-8/12 mx-auto'>
                <div className="text-center mb-10">
                    <img src={photo} className="rounded-full shadow border-xl mx-auto w-40" alt="profile" />

                    <h1 className="text-3xl font-semibold uppercase mt-3">Tilok Paul</h1>
                    <h3 className='text-sm'>Front End Web Developer</h3>
                    <div>
                        <a className='btn btn-link my-0' href="https://github.com/tilok-wp" target="_blank" rel="noopener noreferrer">Github</a> ||
                        <a className='btn btn-link my-0' href="https://www.linkedin.com/in/tilokpaul" target="_blank" rel="noopener noreferrer"> Linkedin</a>
                    </div>
                    <p className='my-3'>I am a passion programmer. My core skill is Frontend. I am a quick <br /> learner, I am always ready to learn and explore new technology.</p>

                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <h3 className='text-2xl'>MY SKILLS</h3>
                        <p><strong>Expertise : </strong> HTML5, CSS3, JavaScript , React.js, Bootstrap, Tailwind, Express JS, Node JS, MongoDB.</p>
                        <p><strong>Familiar :  </strong> PHP, Wordpress , python</p>
                        <p><strong>Design Skills :  </strong> Adobe PhotoShop, Adobe Illustrator</p>
                        <p><strong>Tools and Software :  </strong> Git, GitHub, Firebase, VS Code, Heroku, Netlify.</p>
                    </div>
                    <div>
                        <p><strong>Email:</strong> <a className='btn btn-link' href="mailto:tilokpaul12@mail.com">tilokpaul12@mail.com</a></p>
                        <p><strong>Phone:</strong> <a className='btn btn-link' href="tel:8801913812815">8801913812815</a></p>
                        <p>Keshabpur, Jashore, Bangladesh-7400</p>

                        <p><strong>EDUCATION:</strong> Masters of business administration
                            National university
                            2013 - 2014
                            Khulna, Bangladesh</p>
                    </div>
                </div>
            </div >
            <h1 className="text-3xl font-semibold uppercase mt-3 text-center mt-20 mb-10">My projects </h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                <div class="card w-full bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/6vnDsTj/project-1.jpg" alt="Shoes" />
                    <div class="card-body">
                        <h2 class="card-title">EIM inventory management</h2>
                        <p>Easily manage stock collection and updates its stock and delivered information.</p>

                        <a href="https://eim-inventory-management.web.app/" target="_blank" className="btn btn-outline btn-primary mt-2"> Live preview</a>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/4RVsbm7/project-2.jpg" alt="Shoes" />
                    <div class="card-body">
                        <h2 class="card-title">DENTAL PRO</h2>
                        <p>Dental pro providing dental services for your's and your family member.</p>

                        <a href="https://dentipro-assinment10.web.app/" target="_blank" className="btn btn-outline btn-primary mt-2"> Live preview</a>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/gdrPggS/project-3.jpg" alt="Shoes" />
                    <div class="card-body">
                        <h2 class="card-title">Clipping path service24 Wordpress site</h2>
                        <p>Clipping Path Service 24 is an elite outsourcing  Image Editing online Service.</p>

                        <a href="https://clippingpathservice24.com/" target="_blank" className="btn btn-outline btn-primary mt-2"> Live preview</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MyPortfolio;