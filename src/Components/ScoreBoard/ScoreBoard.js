import "./ScoreBoard.css"

function ScoreBoard({type}){
    return(
        <div className="ScoreBoard">
            <h3>{type}</h3>
        </div>
    );
}

export default ScoreBoard;