import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import GallerySlider from './GallerySlider';

const Gallery = () => {
    const [view, setView] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        isInView && setView(true)
    }, [isInView])

    return (
        <section ref={ref} className="gallery">
            {view ? (<motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    default: {
                        delay: 0.1,
                        duration: 0.9,
                    }
                }}>
                <Container className="gallery-container">
                    <div className="gallery-text">
                        <div className="gallery-subtitle subtitle">Flavorful Imagery</div>
                        <h2>Gallery</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam doloremque iure ut neque! Inventore, harum.</p>
                        <button className="btn-all">View More</button>
                    </div>
                    <GallerySlider />
                </Container>

            </motion.div>) : <p>No data</p>}
        </section>
    )
}

export default Gallery;