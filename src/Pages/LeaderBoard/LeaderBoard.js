import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import "./LeaderBoard.css";

function Leaderboard({hasDorm}){
    console.log(hasDorm)
    return(
        <div className="LeaderBoard">
            {
                hasDorm ? 
                <ScoreBoard
                type="Section"/>
                :
                <ScoreBoard
                type="Dorm"/>
            }
            <h3>LeaderBoard Page</h3>
        </div>
    );
}

export default Leaderboard;