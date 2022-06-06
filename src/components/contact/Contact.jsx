import React from 'react';
import ContactCard from './ContactCard';
import Input from './Input';
import './contact.css';

const Contact = () => {
    return ( 
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <ContactCard 
                        name="Email"
                        desc="aimon.imran@gmail.com"
                        anchor="mailto:aimon.imran@gmail.com"
                    />
                    <ContactCard 
                        name="Contact"
                        desc="+92 330 2803461"
                        anchor="https://api.whatsapp.com/send?phone=+923302803461"
                    />
                </div>
                <form action="">
                    <Input
                        name="name"
                        placeholder="Your Full Name"
                    />
                    <Input
                        name="email"
                        placeholder="Your Email Address"
                    />
                    <textarea name="message" rows="4" placeholder="Message" required />
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </section>
    );
}
 
export default Contact;