import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import logo from '../../Images/drippy.png';
import "./LeaderBoard.css";

function Leaderboard({hasDorm}){
    console.log(hasDorm)
    return(
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
                hasDorm ? 
                <ScoreBoard
                type="Section"/>
                :
                <ScoreBoard
                type="Dorm"/>
            }
        </div>
    );
}

export default Leaderboard;