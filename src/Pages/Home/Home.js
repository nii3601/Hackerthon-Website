import {Container,Row,Col} from 'react-bootstrap';
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import './Home.css'

function Home(){
    return(
        <div className="Home">
            <Container fluid>
                <Col>
                    <div id="not_leaderboard">
                        <Row>
                            <Row>
                                <Col>
                                    <h1 
                                        id = "h1_home"
                                        style={{
                                            "textAlign":"left"
                                        }}
                                    >
                                        Average Campus Water Use Per Day:
                                    </h1>
                                </Col>
                                <Col>
                                    <h1 
                                        id = "h1_home"
                                        style = {{
                                            "textAlign":"left"
                                        }}
                                    >
                                        50
                                    </h1>
                                    <h2
                                        id = "h2_home"
                                    >
                                        gal/day
                                    </h2>
                                </Col>
                            </Row>
                            <div id="row2">
                                <Row>
                                    <Col>
                                        <h2
                                            id = "h2_home"
                                            style={{
                                                "textAlign":"left"
                                            }}
                                        >
                                            Total Campus Water Use This Year:
                                        </h2>
                                    </Col>
                                    <Col>
                                        <h2
                                            id = "h2_home"
                                        >
                                            50
                                        </h2>
                                        <h2
                                            id = "h2_home"
                                        >
                                            gal
                                        </h2>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <h1 id = "h1_home">Type the name of a dorm here:</h1>
                                <input 
                                    type="text" 
                                    placeholder="Search..."
                                />
                            </Col>
                        </Row>
                    </div>
                    <br/>
                    <br/>
                    <Row>
                        <LeaderBoard/>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Home;