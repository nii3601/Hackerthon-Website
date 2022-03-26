import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import { getCampusScores } from '../../Services/getCampusScore';
import {getSectionScores} from '../../Services/getDormScore';
import logo from '../../Images/drippy.png';
import "./LeaderBoard.css";

function Leaderboard() {

    const [data, setData] = useState({});
    // const [data_2, setData_2] = useState({});
    //const [dormName,setDormName] = useState("");




    let dormID = useParams("dormID").dormID; // for dorm name


    useEffect(() => {
        console.log(dormID);
        if (dormID) {
            // getSectionScores(dormID).then((value) => {

            // });

        }
        else {
            //if not then just get general campus dorms leaderboard
            // getCampusScores().then((result) => {
            //     // console.log(result);
                
            //     // setData(data=>({
            //     //     ...result
            //     // }));
            //     //console.log(data)
            //     //console.log("Data is now:", data);
            // });
        }
    }, [dormID]);

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
                dormID ?
                    <ScoreBoard
                        type={dormID} content="Sections" data={{"3a":"sample","4a" : "sampke"}} />
                    :
                    <ScoreBoard
                        type="Campus Dorms" content="Dorms" data={{"sample":"sample"}} />
            }
        </div>
    );
}

export default Leaderboard;