import { useEffect,useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./ScoreBoard.css"


// When sections are passed in, if type is dorm then its dorm and if type is section then section

function ScoreBoard({ type, content, data}) {

    // console.log(nameList);
    // console.log(scoreList);

    const [ranking, setRankings] = useState({});



    useEffect(()=>{
        console.log(data);
        const sortable = Object.entries(data)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    setRankings(sortable);
    
        
    },[data]);


    return (
        <div className="ScoreBoard">
            <Container>
                <Row>
                    <h3>{type}</h3>
                    <table id="table">
                        <tbody>
                            <tr>
                                <th>Rank</th>
                                <th>{content}</th>
                                <th>Volume</th>
                                
                            </tr>

                            {/* <tr>
                                            <td>0</td>
                                            <td>{nameList[0]}</td>
                                            <td>{nameList[0]}</td>
                                        </tr> */}

                            {
                                Object.keys(ranking).map((item, index) => {
                                    return (
                                            <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item}</td>
                                            <td>{ranking[item]}</td>
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