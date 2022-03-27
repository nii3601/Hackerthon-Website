import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import { getCampusLeaderboard, getScores } from '../../Services/getCampusLeaderboard';
import logo from '../../Images/drippy.png';
import "./LeaderBoard.css";

function Leaderboard() {
    const [data, setData] = useState({});
    const [flag, setFlag] = useState(false);


    let dormID = useParams("dormID").dormID; // for dorm name


    useEffect(() => {

        if (dormID) {
            setFlag(true);

        }
        else {
            getCampusLeaderboard().then((result) => {
                for (var i = 0; i < result.length; i++) {
                    const name = result[i].get("name");
                    getScores(result[i]).then((score) => {
                        setData(previousData => {
                            const newData = { ...previousData };
                            newData[name] = score;
                            return newData;
                        });
                    });
                }
            })
        }

    }, []);

    return (
        <div className="LeaderBoard">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Water Wars logo"
            />
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Water Wars logo"
            />
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Water Wars logo"
            />
            {/* {
                dormID ?
                    <ScoreBoard
                        type={dormID} content="Sections" data={{"3a":"sample","4a" : "sampke"}} />
                    :
                    <ScoreBoard
                        type="Campus Dorms" content="Dorms" data={{
                            "O'Neil": 6278,
                            "Duncan": 6792,
                            "Ryan": 6597,
                            "Keogh": 6821,
                            "McGlinn": 6052,
                            "Baumer": 3748,
                            "Welsh Family": 5569
                          }} />
            } */}

            {/* <ScoreBoard
                        type="Campus Dorms" content="Dorms" data={{
                            "O'Neil": 6278,
                            "Duncan": 6792,
                            "Ryan": 6597,
                            "Keogh": 6821,
                            "McGlinn": 6052,
                            "Baumer": 3748,
                            "Welsh Family": 5569
                          }} /> */}

            {
                flag ?
                    <ScoreBoard
                        type="Dorms" content="Section" data={data} />
                    :
                    <ScoreBoard
                        type="Campus Dorms" content="Dorms" data={data} />
            }

            {/* <ScoreBoard
                type="Campus Dorms" content="Dorms" data={data} /> */}

        </div>
    );
}

export default Leaderboard;