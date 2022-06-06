import React, { useState } from 'react';
import {BiHome} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {MdOutlineComputer} from 'react-icons/md';
import {RiCustomerService2Line} from 'react-icons/ri';
import {AiOutlineMessage} from 'react-icons/ai';
import './nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return ( 
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <BiHome />
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>
                < RiCustomerService2Line />    
            </a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
                <MdOutlineComputer />
            </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
                <AiOutlineMessage />
            </a>
        </nav>
    );
}
 
export default Nav;