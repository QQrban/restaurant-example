import React from 'react'
import { Container } from 'react-bootstrap'
import AccordionMenu from './AccordionMenu'

const Menu = () => {
    return (
        <section id='menu' className='menu'>
            <Container>
                <div className="menu-subtitle subtitle">Menu that fits your palate</div>
                <h2>Flavors of the Kitchen</h2>
                <div className="menu-description">
                    We pride ourselves on providing a unique dining experience with exceptional cuisine and warm hospitality. Our talented chefs prepare every dish with passion and care, using only the freshest ingredients. We believe that every guest deserves a memorable experience, and we strive to make every visit special. From romantic dinners to family gatherings, our restaurant is the perfect place to enjoy delicious food in a welcoming atmosphere. We look forward to serving you soon!
                </div>
                <AccordionMenu />
            </Container>
        </section>
    )
}

export default Menu;