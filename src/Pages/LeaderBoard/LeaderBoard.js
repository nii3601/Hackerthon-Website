import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import { getCampusLeaderboard, getScores } from '../../Services/getCampusLeaderboard';
import { getDormLeaderBoard,getDormObj } from '../../Services/getDormLeaderboard';
import logo from '../../Images/drippy.png';
import "./LeaderBoard.css";

function Leaderboard() {
    const [data, setData] = useState({});
    const [flag, setFlag] = useState(false);


    let dormName = useParams("dormName").dormName; // for dorm name


    useEffect(() => {

        if (dormName) {
            //console.log(dormName);
            setFlag(true);
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
            });

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

    }, [dormName]);

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

            {
                flag ?
                    <ScoreBoard
                        type={dormName+" Hall Section Literboard"} content="Section" data={data} />
                    :
                    <ScoreBoard
                        type="Campus Dorm Literboard" content="Dorms" data={data} />
            }

            {/* <ScoreBoard
                type="Campus Dorms" content="Dorms" data={data} /> */}

        </div>
    );
}

export default Leaderboard;