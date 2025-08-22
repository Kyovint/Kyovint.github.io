import './workExperience.css'

import { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import { timelineOppositeContentClasses } from '@mui/lab';

import { Experience } from './experience/Experience';
import ExperienceData from '../../data/experiences';

export function WorkExperience () {
    const [animate, setAnimate] = useState(false);
    const [currentExperience, setCurrentExperience] = useState(0);

    const changeExperience = (index) => {
        setCurrentExperience(index);
    }

    const experiences = ExperienceData();

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <section className="we-section">
            <div className={`we-timeline-container ${animate ? 'animate' : ''}`}>
                <Timeline sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                    },
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    padding: 0,
                    margin: 0,
                }}>
                    {experiences.map((exp,index) => {
                        const { companyName, Role, inDate, outDate, logo } = exp;
                        return (
                            <Experience
                                companyName={companyName}
                                Role={Role}
                                inDate={inDate}
                                outDate={outDate}
                                click={() => changeExperience(index)}
                            >
                                <img src={logo} alt={`${companyName} logo`} style={{ height: 50, borderRadius: 50 }} />
                            </Experience>
                        );
                    })}
                </Timeline>
            </div>
            <div className='we-timeline-description'>
                <img src={experiences[currentExperience].banner} alt={experiences[currentExperience].banner} className='we-description-image'/>
                <h3>{experiences[currentExperience].companyName}</h3>
                <p className='company-description-p'>{experiences[currentExperience].description}</p>
                <h3>main technologies used</h3>
                <div className='we-description-technologies'>
                    <div className='we-description-technology'>
                        <img src={experiences[currentExperience].technologiesImg[0]} alt="Logo" className='we-technology-icon'/>
                        <span>{experiences[currentExperience].technologies[0]}</span>
                    </div>
                    <div className='we-description-technology'>
                        <img src={experiences[currentExperience].technologiesImg[1]} alt="Logox" className='we-technology-icon'/>
                        <span>{experiences[currentExperience].technologies[1]}</span>
                    </div>
                    <div className='we-description-technology'>
                        <img src={experiences[currentExperience].technologiesImg[2]} alt="Logoy" className='we-technology-icon'/>
                        <span>{experiences[currentExperience].technologies[2]}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}