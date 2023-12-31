import React from 'react';
import Nav from '../Nav';
import headerImg from '../../assets/cover/Montain Cover.jpeg';
import './style.css';

const Header = ({pages, currentPage, setCurrentPage}) => {
  
  return (
  <header className='container-fluid'>
    <img src={headerImg} alt='montain' />
    <div className='container d-lg-flex justify-content-lg-between py-3'>
      <h1>Daniel Pacheco</h1>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
      />
    </div>
  </header>
  );
};

export default Header;