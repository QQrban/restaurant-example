import React from 'react';
import { Container } from 'react-bootstrap';
import knife from '../../img/photo/knife-about.png';
import bg from '../../img/photo/about-bg-absolute.png'

const About = () => {
    return (
        <section id='about' className='about'>
            <Container>
                <div className="about-content">
                    <div className='about-bg-abs'>
                        <img src={bg} alt="" />
                    </div>
                    <div className="about-us about-text">
                        <h2 className='about-us-header'>About Us</h2>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                        <button className='btn-all about-us-btn'>Learn More</button>
                    </div>
                    <div className="about-img">
                        <img src={knife} alt="" />
                    </div>
                    <div className="about-history about-text">
                        <h2 className='about-history-header'>Our History</h2>
                        <p>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
                        <button className='btn-all about-history-btn'>Learn More</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About