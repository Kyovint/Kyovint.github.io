import './about.css'
import potrait from '../../assets/About/me.png';

export function About () {
    return (
        <section className="about-section">
            <div className='about-text'>
                <h1>Hi there.<br />I'm Kevin Ardila Sanabria.</h1>
                <h2>I'm Software Engineer, DevSecOps specialist, Cloud-Native enthusiast, lifelong learner & proudly Colombian.</h2>
            </div>
            <div className='about-image'>
                <img src={potrait} alt="potrait" className='potrait' />
            </div>
        </section>
    )
}