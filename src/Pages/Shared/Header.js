import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../utility/CustomLink';
import { XIcon, MenuAlt3Icon } from '@heroicons/react/solid'

const Header = () => {

    const [opener, setOpener] = useState(false)
    return (
        <header className='sticky top-0 bg-base-100 z-50 shadow shadow-primary-50'>
            <div className='container md:mx-auto lg:flex justify-between items-center relative z-10'>
                <Link className='z-10 relative text-primary font-bold' to='/'> Grid Roller </Link>
                <nav className={`flex flex-col py-5 md:py-0 md:flex-row absolute text-center md:static w-full md:w-fit bg-green-50 md:bg-transparent duration-500 ease-in ${opener ? 'top-[65px]' : 'top-[-300px]'}`}>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                    <CustomLink to='/contact'>Contact</CustomLink>
                    <CustomLink to='/my-portfolio'>My Portfolio</CustomLink>
                </nav>
                <div className='fixed top-5  right-0 flex items-center md:static z-50'>
                    <Link to='login' className='text-accent font-semibold'>Login</Link>
                    <div onClick={() => setOpener(!opener)} className='w-8 h-8 md:hidden ml-1 mr-5'>
                        {opener ? <XIcon /> : <MenuAlt3Icon />}
                    </div>
                </div>
            </div>

        </header >
    );
};

export default Header;