import {Container,Row,Col} from 'react-bootstrap';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import { getDormNames } from '../../Services/getDormNames';
import { getTotalUsage } from '../../Services/getTotalUsage';
import { getHighestScoringSection } from '../../Services/getHighestScoringSection';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { useEffect } from 'react';

function Home(){
    let history = useNavigate();

    const [formVal, setFormVal] = useState('');
    const [dormNames,setDormNames] = useState({});
    const [totalUsage,setTotalUsage] = useState(0);

    const handleNameInput = (e) => {
        setFormVal(e.target.value);
    }

    const handleSubmit = () => {
        console.log(dormNames);
        if(dormNames[formVal] === true){
            history('/info/' + formVal);
        }
        else{
            alert(formVal + " isn't on our system yet :(")
        }
        
    }

    

    useEffect(()=>{
        getDormNames().then((results)=>{
            for (let i = 0; i < results.length; i++){
                //output.push(results[i].get("name"));
                setDormNames(prevdata =>{
                let newData = {...prevdata}
                newData[results[i].get("name")] = true
                return newData
            });
            }
        });

        getTotalUsage().then((sum)=>{
            setTotalUsage(parseInt(sum));
        });

    },[]);

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
                                        Total Water Use:
                                    </h1>
                                </Col>
                                <Col>
                                    <h1 
                                        id = "h1_home"
                                        style = {{
                                            "textAlign":"left"
                                        }}
                                    >
                                        {totalUsage}
                                    </h1>
                                    <h2
                                        id = "h2_home"
                                    >
                                        Liters
                                    </h2>
                                </Col>
                            </Row>
                            <div id="row2">
                                {/* <Row>
                                    <Col>
                                        <h2
                                            id = "h2_home"
                                            style={{
                                                "textAlign":"left"
                                            }}
                                        >
                                            Highest Scoring Section:
                                        </h2>
                                    </Col>
                                    <Col>
                                        <h2
                                            id = "h2_home"
                                        >
                                            Baumer 3a
                                        </h2>
                                    </Col>
                                </Row> */}
                            </div>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <h1 id = "h1_home">Type the name of a dorm here:</h1>
                                <Row>
                                    <Col>
                                    <input 
                                        id="search_bar"
                                        onChange={handleNameInput}
                                        type="text" 
                                        placeholder="Search..."
                                        value={formVal}
                                    />
                                    </Col>
                                    <Col>
                                    <div
                                        id="submit_button"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </div>
                                    </Col>
    
                                </Row>
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