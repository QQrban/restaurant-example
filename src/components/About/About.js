import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import knife from '../../img/photo/knife-about.png';
import bg from '../../img/photo/about-bg-absolute.png';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="about" className="about">

            <Container ref={ref} style={{
                transform: isInView ? 'none' : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}>
                <div className="about-content">
                    <div className="about-bg-abs">
                        <img src={bg} alt="bg" />
                    </div>
                    <div className="about-us about-text">
                        <h2 className="about-us-header">About Us</h2>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                        <button className="btn-all about-us-btn">Learn More</button>
                    </div>
                    <div className="about-img">
                        <img src={knife} alt="" />
                    </div>
                    <div className="about-history about-text">
                        <h2 className="about-history-header">Our History</h2>
                        <p>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
                        <button className="btn-all about-history-btn">Learn More</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About;