import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import './footer.css';

const Footer = () => {
    return ( 
        <footer>
            <a href="#" className='footer__logo'>Aimon Imran</a>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="Skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/aimon-imran-420b091a6/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/aimonimran" target="_blank"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Aimon Imran | All Rights Reserved</small>
            </div>
        </footer>
    );
}
 
export default Footer;