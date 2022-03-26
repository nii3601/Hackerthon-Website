import {Container,Row} from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer'

function Home(){
    return(
        <div className="Home">
            <Container fluid>
                <Row>
                    <h1>This is home page</h1>
                </Row>
                <Footer/>
            </Container>
        </div>
    );
}

export default Home;