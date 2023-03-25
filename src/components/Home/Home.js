import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import salmon from '../../img/photo/home-salmon.jpg'

const Home = () => {

    const scrollToId = () => {
        document.getElementById('menu').scrollIntoView();
    }

    return (
        <section id="home" className="home">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    default: {
                        delay: 0.1,
                        duration: 0.9,
                    }
                }}>
                <Container className="home-container">
                    <div className="home-left-block">
                        <div className="home-subtitle subtitle">Chase the new flavour</div>
                        <h1>THE KEY TO FINE DINING</h1>
                        <p>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
                        <button onClick={() => scrollToId()} className="btn-all">Explore Menu</button>
                    </div>
                    <div className="home-right-block">
                        <img src={salmon} alt="salmon" />
                    </div>
                </Container>
            </motion.div>
        </section>
    )
}

export default Home