import { Container,Row } from "react-bootstrap";
import "./ScoreBoard.css"


// When sections are passed in, if type is dorm then its dorm and if type is section then section

function ScoreBoard({type}){
    return(
        <div className="ScoreBoard">
            <Container>
                <Row>
                <h3>{type} Leaderboard</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>{type}</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Baumer</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Duncan</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lewis</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Cavanaugh</td>
                        <td>9000</td>
                    </tr>
                    </tbody>
                    
                </table>
                </Row>  
            </Container>
            
        </div>
    );
}

export default ScoreBoard;