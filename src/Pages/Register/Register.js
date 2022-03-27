import {Container,Row,Col} from 'react-bootstrap';
import './Register.css'

function Register(){
    return(
        <div className="Register">
            <Container fluid>
                <Col>
                        <div id="field">
                                <Row>
                                        <Row>
                                                <h2>Dorm Name</h2>
                                        </Row>
                                        <Row>
                                                <input 
                                                        type="text" 
                                                        placeholder="Enter Name..."
                                                />
                                        </Row>
                                </Row>
                        </div>
                        <div id="field">
                                <Row>
                                        <Row>
                                                <h2>Dorm Color</h2>
                                        </Row>
                                        <Row>
                                                <input 
                                                        type="text" 
                                                        placeholder="Enter Hex Value..."
                                                />
                                        </Row>
                                </Row>
                        </div>
                        <div id="field">
                                <Row>
                                        <Row>
                                                <h2>Section Names</h2>
                                        </Row>
                                        <Row>
                                                <input 
                                                        type="text" 
                                                        placeholder="Enter Names Separated by Commas..."
                                                />
                                        </Row>
                                </Row>
                        </div>
                        <div id="field">
                                <Row>
                                        <Row>
                                                <h2>Number of Residents</h2>
                                        </Row>
                                        <Row>
                                                <input 
                                                        type="text" 
                                                        placeholder="Enter A Number..."
                                                />
                                        </Row>
                                </Row>
                        </div>
                </Col>
            </Container>
        </div>
    );
}

export default Register;