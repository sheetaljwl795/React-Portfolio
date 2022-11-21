import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, setCurrentPage }) {
    return (
        <nav className='navbar py-4 navbar-dark bg-light d-flex justify-content-around'>
                       
            <h1>Sheetal Jawale</h1>
        
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        </nav>
    );
};

export default Header;