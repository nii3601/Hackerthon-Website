import {Container,Row,Col} from 'react-bootstrap';
import './Dorm.css'

function Dorm(){
    const type = "Baumer"
    const content = "Sections"
    const data = {
        "3a":"sample","4a" : "sampke"
    }
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
                        <div id="the_table">
                            <Row>
                                <h3>{type} Leaderboard</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Rank</th>
                                            <th>{content}</th>
                                            <th>Score</th>
                                        </tr>
                                        {
                                            Object.keys(data).map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item}</td>
                                                        <td>{data[item]}</td>
                                                    </tr>
                                                );

                                            })
                                        }

                                    </tbody>

                                </table>
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Dorm;