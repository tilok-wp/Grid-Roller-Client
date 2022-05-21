import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            className={`font-semibold py-1 md:py-5 md:px-3  ${match ? 'text-primary' : 'text-accent'}`}
            to={to}
            {...props}>

            {children}
        </Link>
    );
};

export default CustomLink;