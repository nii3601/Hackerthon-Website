import Parse from "parse";

export const getCampusLeaderboard = () =>{ //main api call
    const Dorm = Parse.Object.extend("dorms");
    const query = new Parse.Query(Dorm);
    return query.find().then((results)=>{
        return results;
    })

}

//gets the objects and returns them as an array
function getObjects(){
    let output = [];
    let query = new Parse.Query("dorms");
    return query.findAll().then((result) => {
        // console.log(result);
        for (let i = 0; i < result.length; i++){
            output.push(result[i]);
        }
        return output;
    });
}

// export const getScores = (dormName, dormObject) => {
export const getScores = (dormObject) => {
    let sum = 0;
    let query = new Parse.Query("water_use_scoreboard");
    query.equalTo("dorm_pointer",dormObject);
    return query.findAll().then((result)=>{
        for (let i = 0; i < result.length ; i++){
            sum += result[i].get("score");
        }
        return sum;
        // return [dormName, sum];
    });
}