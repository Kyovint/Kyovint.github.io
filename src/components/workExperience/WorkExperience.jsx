import './workExperience.css'
import logoPeriferia from '../../assets/workExperience/periferiaIT.png';
import logoNuam from '../../assets/workExperience/nuam.png';
import logoBvc from '../../assets/workExperience/bvc.png';
import land from '../../assets/image.png';

import { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { timelineOppositeContentClasses } from '@mui/lab';
import Typography from '@mui/material/Typography';

export function WorkExperience () {
    const [animate, setAnimate] = useState(false);

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
                    <button className='timeline-button'>
                        <TimelineItem >
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="#9e9e9eff">
                                Apr. 2025 - Agu. 2025
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                    <img src={logoPeriferia} alt="Logo" style={{height: 50, borderRadius: 50 }}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '40px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Periferia IT Group
                                </Typography>
                                <Typography>Devops Engineer</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </button>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="#9e9e9eff">
                            Jan. 2024 - Apr. 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                                <img src={logoNuam} alt="Logo" style={{height: 50, borderRadius: 50 }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '40px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Nuam Exchange
                        </Typography>
                        <Typography>Software Development Engineer</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="#9e9e9eff">
                            Apr. 2022 - Dec. 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                                <img src={logoBvc} alt="Logo" style={{height: 50, borderRadius: 50 }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '40px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Bolsa de Valores de Colombia
                            </Typography>
                            <Typography>Software Development Engineer</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className='we-timeline-description'>
                <img src={land} alt="Logo" className='we-description-image'/>
                <h3>Company Description</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                <h3>Technologies that I used there</h3>
                <div className='we-description-technologies'>
                    <div className='we-description-technology'>
                        <img src={logoNuam} alt="Logo" className='we-technology-icon'/>
                        <span>Azure devops</span>
                    </div>
                    <div className='we-description-technology'>
                        <img src={logoNuam} alt="Logo" className='we-technology-icon'/>
                        <span>Azure devops AWS</span>
                    </div>
                    <div className='we-description-technology'>
                        <img src={logoNuam} alt="Logo" className='we-technology-icon'/>
                        <span>Azure devops</span>
                    </div>
                </div>
            </div>
        </section>
    )
}