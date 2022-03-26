import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./ScoreBoard.css"


// When sections are passed in, if type is dorm then its dorm and if type is section then section

function ScoreBoard({ type, content, data }) {

    useEffect(()=>{

    },[]);


    return (
        <div className="ScoreBoard">
            <Container>
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
            </Container>

        </div>
    );
}

export default ScoreBoard;