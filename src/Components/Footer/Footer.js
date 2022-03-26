import { Container, Row,Col } from 'react-bootstrap';
import './Footer.css'
function Footer(){
        return (
                <div className="Footer">
                        <Container>
                                <Row>
                                        <Col>
                                                <p>
                                                        © 2022 David Adams, Jonathan Lamptey, Jeremy Stevens, Luke Braby
                                                </p>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        );
}
export default Footer;