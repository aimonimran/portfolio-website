import React from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const SkillsCard = ({ skill, experience }) => {
    return ( 
        <article className="skills__details">
            <HiOutlineBadgeCheck className='skills__details-icon' />
            <div>
                <h4>{skill}</h4>
                <small className='text-light'>{experience}</small>
            </div>
        </article>
    );
}
 
export default SkillsCard;