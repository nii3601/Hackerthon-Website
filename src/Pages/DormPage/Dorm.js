import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import { getDormLeaderBoard,getDormObj } from '../../Services/getDormLeaderboard';
import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import './Dorm.css'

function Dorm(){

    const [data, setData] = useState({});

    let dormName = useParams("dorm").dorm; // for dorm name

    useEffect(()=>{
        getDormObj(dormName).then((obj)=>{
            //console.log(obj)
            getDormLeaderBoard(obj).then((results)=>{ //from here one can get score and section objectID
                //console.log(results);
                for (var j = 0; j < results.length; j++){
                    //console.log(results[i].get("score"))
                    //console.log(results[i].get("section_pointer").get("name"))
                    setData(previousData => {
                        const newData = { ...previousData };
                        newData[results[j].get("section_pointer").get("name")] = results[j].get("score");
                        return newData;
                    });
                }
            })
        })
    },[dormName]);
    
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
                                        liters/day
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
                                            liters
                                        </h2>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    <br/>
                    <br/>
                        <ScoreBoard
                        type={dormName+" Hall Section Literboard"} content="Section" data={data} />
                </Col>
            </Container>
        </div>
    );
}

export default Dorm;