import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/my-image.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return ( 
        <header>
            <div className="container container__header">
                <h5 className='text-light'>Hello I'm</h5>
                <h1 className='candidate__name'>Aimon Imran</h1>
                <h5 className='text-light'>Web Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="my-image" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}
 
export default Header;