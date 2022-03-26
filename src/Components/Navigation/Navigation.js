import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return (
        <div className='Navigation'>
            <Navbar collapseOnSelect id='Nav-Back' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Hackathon Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/rules" id="items">Rules</Nav.Link>
                            <Nav.Link href="/leaderboard" id="items">Leaderboard</Nav.Link>
                            <Nav.Link href="/register" id="items">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;