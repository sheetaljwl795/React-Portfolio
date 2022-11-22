import React from 'react';
import Navbar from './Navbar';
import coverImage from '../assets/cover/cover-photo-1.webp';

function Header({ currentPage, setCurrentPage }) {
    return (
        
        <nav className='flex-row space-between px-1' style={{ backgroundImage: `url(${coverImage})` }}>
                        
            <h1>Sheetal Jawale</h1>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        </nav>
    );
};

export default Header;