import React from 'react';
import {capitalize} from '../../utils';
import './style.css';

const Nav = ({pages, currentPage, setCurrentPage}) => {
  return <nav className='nav d-flex justify-content-end align-items-center'>
    {pages.map(page => (
        <li href='/#' key={page} className={` ${page === currentPage && 'activated'}`}
        onClick={() => setCurrentPage(page)}
        >
            {capitalize(page)}
        </li>
    ))}
  </nav>;
};

export default Nav;