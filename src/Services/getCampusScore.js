import Parse from "parse";

////gets all scores for dorms
export const getCampusScores = () =>{

    let output = {};

    let query = new Parse.Query("dorms");
    const Dorm = Parse.Object.extend("dorms"); //dorm class
    return query.findAll().then((result)=>{
        //console.log(result);
        for (let dorms of result){
            //output[dorms.get("name")] = 0;
            let dormObj = new Dorm();
            dormObj.id = dorms.id;
            query = new Parse.Query("water_use_scoreboard");
            query.equalTo("dorm_pointer", dormObj);
            return query.findAll().then((result)=>{
                for (let scores of result){
                    output[dorms.get("name")] = parseInt(scores.get("score"));
                }
                return output
            });
        }
    });

    // //query for dorm first then use that
    // let query_dorm = new Parse.Query("dorms");
    // const Dorm = Parse.Object.extend("dorms"); //dorm class
    // const Section = Parse.Object.extend("sections"); //sections class
    // query_dorm.equalTo("name", dorm);
    // return query_dorm.first().then((result)=>{ //get dorm id
    //     console.log("Dorm found:",result);
    //     const dormObj = new Dorm();
    //     dormObj.id = result.id;
    //     let query_section =  new Parse.Query("sections");
    //     query_section.equalTo("dorm", dormObj);
    //     query_section.equalTo("name",sectionName);
    //     return query_section.findAll().then((result)=>{ //get sectionID
    //         console.log("Section found:",result);
    //         const sectionObj = new Section();
    //         sectionObj.id = result.id
    //         let query_score = new Parse.Query("water_use_scoreboard");
    //         query_score.equalTo("section_pointer", sectionObj);
    //         return query_score.findAll().then((result)=>{
    //             return result;
    //         });
    //     })
    // });


}