import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

import profile from '../data/profile.json';

const iconMap = {
    fullStack: faReact,
    architecture: faDocker,
    management: faPeopleRoof
};


type ExpertiseKeys = "Full Stack Development" | "Application Architecture" | "Engineering Management";


function Expertise() {

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>

            <div className="skills-grid">
                {Object.keys(profile.expertise).map((expertise, index) => {
                    const expertiseKey = expertise as ExpertiseKeys;
                    // @ts-ignore
                    const icon = iconMap[profile.expertise[expertiseKey].icon];
                    return (
                        <div className="skill" key={index}>
                            <FontAwesomeIcon icon={icon} size="3x"/>
                            <h3>{expertise}</h3>
                            <p>{profile.expertise[expertiseKey]?.Description}</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {profile.expertise[expertiseKey].skills.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default Expertise;