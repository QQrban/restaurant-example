import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLogo from './HeaderLogo';

function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
            <Container >
                <Navbar.Brand href="#home">
                    <HeaderLogo />
                    <span className="ms-4">Castle</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1 gap-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#awards">Awards</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;