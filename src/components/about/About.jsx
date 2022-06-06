import React from 'react';
import './about.css';
import ME from '../../assets/about-me.jpeg';

const About = () => {
    return ( 
        <section id='about'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about-me-image" />
                    </div>
                </div>

                <div className="about__content">
                    <p>
                        Hey! This is Aimon Imran, a third year Computer Science student who is currently pursuing 
                        bachelors from NED University of Engineering and Technology. I have keen interest in Web 
                        Development and aspires to be the best in my area. 
                        <br /><br />
                        I'm also a social activist who have done various anti-wall chalking projects and plantation
                        drives in different areas of Karachi. 
                    </p>
                    
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}
 
export default About;