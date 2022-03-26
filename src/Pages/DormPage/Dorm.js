import {Container,Row,Col} from 'react-bootstrap';
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import './Dorm.css'

function Dorm(){
    return(
        <div className="Dorm">
            <Container fluid>
                <Col>
                    <div id="not_leaderboard">
                        <Row>
                            <Row>
                                <Col>
                                    <h1 
                                        id = "h1_Dorm"
                                        style={{
                                            "textAlign":"left"
                                        }}
                                    >
                                        Average Dorm Water Use Per Day:
                                    </h1>
                                </Col>
                                <Col>
                                    <h1 
                                        id = "h1_Dorm"
                                        style = {{
                                            "textAlign":"left"
                                        }}
                                    >
                                        50
                                    </h1>
                                    <h2
                                        id = "h2_Dorm"
                                    >
                                        gal/day
                                    </h2>
                                </Col>
                            </Row>
                            <div id="row2">
                                <Row>
                                    <Col>
                                        <h2
                                            id = "h2_Dorm"
                                            style={{
                                                "textAlign":"left"
                                            }}
                                        >
                                            Total Dorm Water Use This Year:
                                        </h2>
                                    </Col>
                                    <Col>
                                        <h2
                                            id = "h2_Dorm"
                                        >
                                            50
                                        </h2>
                                        <h2
                                            id = "h2_Dorm"
                                        >
                                            gal
                                        </h2>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    <br/>
                    <br/>
                    <Row>
                        <LeaderBoard hasDorm={true}/>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Dorm;