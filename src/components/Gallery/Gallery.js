import { Container } from "react-bootstrap";
import GallerySlider from "./GallerySlider";

const Gallery = () => {
    return (
        <section className="gallery">
            <Container className="gallery-container">
                <div className="gallery-text">
                    <div className="gallery-subtitle subtitle">Flavorful Imagery</div>
                    <h2>Photo Gallery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam doloremque iure ut neque! Inventore, harum.</p>
                    <button className="btn-all">View More</button>
                </div>
                <GallerySlider />
            </Container>
        </section>
    )
}

export default Gallery;