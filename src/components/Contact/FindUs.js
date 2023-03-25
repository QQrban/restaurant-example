import { Container } from "react-bootstrap"
import bg from '../../img/photo/about-bg-absolute.png'

const FindUs = () => {
    return (
        <section id="contact" className="contact">
            <Container className="contact-container">
                <div className="contact-bg-abs">
                    <img src={bg} alt="" />
                </div>
                <div className="contact-info">
                    <div className="contact-subtitle subtitle">Contact</div>
                    <h2>Find Us</h2>
                    <p className="contact-location">Estonia, Tallinn</p>
                    <p className="contact-hours">Opening Hours</p>
                    <div className="contact-hours-text">
                        <div>Mon - Fri: 09:00 - 21:00</div>
                        <div>Sat - Sun: 11:00 - 23:00</div>
                    </div>
                    <button className="btn-all">Book a table</button>
                </div>
                <div className="contact-email">
                    <h2>Personalized Offers</h2>
                    <p>Please enter your email to get personalized offers</p>
                    <div className="contact-email-input">
                        <input type="email" id="email" />
                        <button className="btn-all">Subscribe</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FindUs