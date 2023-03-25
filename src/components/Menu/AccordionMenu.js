import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { getMenu } from '../../services/apiService';


function AccordionMenu() {
    const [starters, setStarters] = useState([]);
    const [mains, setMains] = useState(null);
    const [desserts, setDesserts] = useState(null);

    useEffect(() => {
        getMenu()
            .then(menu => {
                const categoryStarters = menu.filter(item => item.category === 'starters');
                setStarters(categoryStarters);

                const categoryMains = menu.filter(item => item.category === 'mains');
                setMains(categoryMains);

                const categoryDesserts = menu.filter(item => item.category === 'desserts');
                setDesserts(categoryDesserts)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0" >
                <Accordion.Header>Starters</Accordion.Header>
                <Accordion.Body>
                    <ul className="menu-items">
                        {starters?.length ? starters.map((starter, i) => (
                            <li key={i} className="menu-item">
                                <div className="menu-item-name">
                                    <h4>{starter.name}</h4>
                                    <p>{starter.descr}</p>
                                </div>
                                <div className="menu-item-price">$ {starter.price}</div>
                            </li>
                        )) : <p>No Data</p>}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Main Courses</Accordion.Header>
                <Accordion.Body>
                    <ul className="menu-items">
                        {mains?.length ? mains.map((main, i) => (
                            <li key={i} className="menu-item">
                                <div className="menu-item-name">
                                    <h4>{main.name}</h4>
                                    <p>{main.descr}</p>
                                </div>
                                <div className="menu-item-price">$ {main.price}</div>
                            </li>
                        )) : <p>No Data</p>}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Desserts</Accordion.Header>
                <Accordion.Body>
                    <ul className="menu-items">
                        {desserts?.length ? desserts.map((dessert, i) => (
                            <li key={i} className="menu-item">
                                <div className="menu-item-name">
                                    <h4>{dessert.name}</h4>
                                    <p>{dessert.descr}</p>
                                </div>
                                <div className="menu-item-price">$ {dessert.price}</div>
                            </li>
                        )) : <p>No Data</p>}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion >
    );
}

export default AccordionMenu;