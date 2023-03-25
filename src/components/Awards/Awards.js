import { Container } from 'react-bootstrap';
import dish from '../../img/photo/awards-photo.jpg'
import first from '../../img/icons/first.png'
import second from '../../img/icons/second.png'
import third from '../../img/icons/third.png'

const Awards = () => {
    return (
        <section id="awards" className="awards">
            <Container className="awards-container">
                <div className="awards-left-block">
                    <div className="awards-subtitle subtitle">Awards & Recognition</div>
                    <h2>Our Achievements</h2>
                    <div className="awards-item">
                        <div className="awards-img">
                            <img src={first} alt="first-place" />
                        </div>
                        <div className="awards-text">
                            <h5 className="awards-name">Golden Plate</h5>
                            <p className="awards-descr">Lorem ipsum dolor sit amet consectetur. Autem, accusamus adipisci deserunt hic maxime libero.</p>
                        </div>
                    </div>
                    <div className="awards-item">
                        <div className="awards-img">
                            <img src={third} alt="first-place" />
                        </div>
                        <div className="awards-text">
                            <h5 className="awards-name">Gastronomy Gem</h5>
                            <p className="awards-descr">Eos voluptatem magni odit omnis. Provident quas culpa ab libero laborum aspernatur vitae</p>
                        </div>
                    </div>
                    <div className="awards-item">
                        <div className="awards-img">
                            <img src={second} alt="first-place" />
                        </div>
                        <div className="awards-text">
                            <h5 className="awards-name">Savory Symbol</h5>
                            <p className="awards-descr">Libero accusantium, eius voluptates quam odit odio facilis. Qui vitae maiores nemo saepe accusantium dolorem modi sunt incidunt!</p>
                        </div>
                    </div>
                    <div className="awards-item">
                        <div className="awards-img">
                            <img src={second} alt="first-place" />
                        </div>
                        <div className="awards-text">
                            <h5 className="awards-name">Rising Star</h5>
                            <p className="awards-descr">Ullam quibusdam nisi voluptatum, sed dignissimos fugiat tempore porro laudantium asperiores perspiciatis omnis obcaecati.</p>
                        </div>
                    </div>
                </div>
                <div className="awards-right-block">
                    <img src={dish} alt="dish" />
                </div>
            </Container>
        </section>
    )
}

export default Awards;