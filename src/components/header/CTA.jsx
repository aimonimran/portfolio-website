import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} className="btn" download>Download CV</a>
            <a href="#about" className="btn btn-primary">About Me</a>
        </div>
      );
}
 
export default CTA;