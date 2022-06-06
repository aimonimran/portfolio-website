import React from 'react';
import frontend from './SkillsFrontendData';
import backend from './SkillsBackendData';
import SkillsCard from './SkillsCard';
import './skills.css'; 

const Skills = () => {
    return ( 
        <section id='skills'>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        {frontend.map(value => (
                            <SkillsCard 
                                key={value.id}
                                skill = {value.skill}
                                experience = {value.experience}
                            />
                        ))}
                    </div>
                </div>

                <div className="skills__backend">
                    <h3>Backend Development</h3>
                    <div className="skills__content">
                        {backend.map(value => (
                            <SkillsCard 
                                key={value.id}
                                skill = {value.skill}
                                experience = {value.experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;

