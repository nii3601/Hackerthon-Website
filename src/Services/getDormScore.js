import Parse from "parse";

export const getSectionObj = (dormID) =>{
    let query = new Parse.Query("sections");
    return query.findAll().then((result)=>{
        return result;
    })
}

export const getSectionScore = (sectionObj) =>{
    let query = new Parse.Query("water_use_scoreboard");
    query.equalTo("section_pointer",sectionObj);
    return query.first().then((result)=>{
        return result.get("score");
    });
}

export const getSectionScores =(dormID) =>{
     let output = [];
     let names = [];
    //let output = {}
    return getSectionObj(dormID).then((result)=>{
        for (let section of result){
            getSectionScore(section).then((value)=>{
                 output.push(value);
                 names.push(section.get("name"));
                //output[String(section.get("name"))] = value;
            });
        }
        return [names,output];
        //return output
    });
}