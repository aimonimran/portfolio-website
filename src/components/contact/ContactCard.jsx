import React from 'react';

const ContactCard = ({ name, desc, anchor, msg }) => {
    return (  
        <article className="contact__option">
            <h4>{name}</h4>
            <h5 className='text-light'>{desc}</h5>
            <a href={anchor} target="_blank">Send A Message</a>
        </article>
    );
}
 
export default ContactCard;