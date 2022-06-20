import React from 'react';
import './portfolio.css';
import portfolioItems from './PortfolioCard';


const Portfolio = () => {
    return ( 
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>My Portfolio</h2>

            <div className="container portfolio__container">
                {portfolioItems.map(value => (
                    <article key={value.id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={value.img} alt="" />
                        </div>
                        <h3>{value.item}</h3>
                        <p className='text-light'>{value.desc}</p>
                        <div className="portfolio__item-cta">
                            <a href={value.github} target="_blank" className='btn'>Github</a>
                            {/* <a href={value.liveDemo} className='btn btn-primary'>Live Demo</a> */}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
 
export default Portfolio;