import Parse from "parse";

export const getTotalUsage = () => { //total usage for school
    let sum = 0;
    const Usage = Parse.Object.extend("water_use_scoreboard");
    const query = new Parse.Query(Usage);
    return query.findAll().then((results)=>{
        for (let i =0; i<results.length;i++){
            sum += results[i].get("score")
        }
        return sum;
    })
}