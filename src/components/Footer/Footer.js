import { Container } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { GiSpoon } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-container">
                <div className="footer-content-wrapper">
                    <div className="footer-contact-us">
                        <h4>Contact Us</h4>
                        <div className="contact-us-info">
                            <p className="info-city">Estonia, Tallinn</p>
                            <p className="info-tel">+372 5021-4824</p>
                            <p className="info-tel">+372 5251-4806</p>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h2>Castle</h2>
                        <p>"Experience Exceptional Fine Dining with Our Artfully Crafted Cuisine and Impeccable Service."</p>
                        <GiSpoon className="spoon" size={40} />
                        <div className="social-links">
                            <a href="https://facebook.com">
                                <FaFacebookF className="link" size={25} />
                            </a>
                            <a href="https://instagram.com">
                                <FiInstagram className="link" size={25} />
                            </a>
                            <a href="https://twitter.com">
                                <BsTwitter className="link" size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-book">
                        <h4>Book A Table</h4>
                        <button className="btn-all">Reserve</button>
                        <p></p>
                    </div>
                </div>
                <div className="footer-rights">
                    <p>&#169; 2023 All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;