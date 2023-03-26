import React, { useRef } from 'react'
import { useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import chef from '../../img/photo/chef.jpg';
import signature from '../../img/photo/signature.png';

const ChefInfo = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="chef">
            <Container
                className="chef-container"
                ref={ref}
                style={{
                    transform: isInView ? 'none' : "translatex(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                }}>
                <div className="chef-left-block">
                    <img src={chef} alt="chef" />
                </div>
                <div className="chef-right-block">
                    <div className="chef-subtitle subtitle">Meet Our Head Chef</div>
                    <h2>What We Believe In</h2>
                    <IconContext.Provider
                        value={{ color: 'white', size: '65px', }}
                    >
                        <RiDoubleQuotesL />
                    </IconContext.Provider>
                    <p className="chef-quote">  We believe that dining is not just about food, it's an experience. Our goal is to create an atmosphere where our guests can relax, indulge, and create memories. We are passionate about using the freshest ingredients to create dishes that are not only visually appealing but also bursting with flavors.</p>
                    <div className="chef-name">
                        <h5>Andrea Bocelli</h5>
                        <p>Chef & Founder</p>
                    </div>
                    <div className="chef-signature">
                        <img src={signature} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ChefInfo;