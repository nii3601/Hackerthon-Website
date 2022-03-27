import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../Images/drippy.png';
import './Navigation.css';

function Navigation() {
    return (
        <div className='Navigation'>
            <Navbar collapseOnSelect id='Nav-Back' expand="lg" bg="#000000" variant="dark">
                <Container>
                    <Navbar.Brand id="brand" href="/">
                        Water Wars
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-center"
                            alt="Water Wars logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/rules" id="items">Rules</Nav.Link>
                            <Nav.Link href="/leaderboard" id="items">Leaderboards</Nav.Link>
                            <Nav.Link href="/register" id="items">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;