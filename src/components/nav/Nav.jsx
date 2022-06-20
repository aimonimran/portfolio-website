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
            <a href="#" onClick={() => setActiveNav('#')} title='Home' className={activeNav === '#' ? 'active' : ''}>
                <BiHome />
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} title='About Me' className={activeNav === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} title='My Skills' className={activeNav === '#skills' ? 'active' : ''}>
                < RiCustomerService2Line />    
            </a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} title='My Portfolio' className={activeNav === '#portfolio' ? 'active' : ''}>
                <MdOutlineComputer />
            </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} title='Contact Me' className={activeNav === '#contact' ? 'active' : ''}>
                <AiOutlineMessage />
            </a>
        </nav>
    );
}
 
export default Nav;