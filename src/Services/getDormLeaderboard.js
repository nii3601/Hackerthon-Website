import Parse from "parse";

export const getDormLeaderBoard = (dormObj) =>{
    /* 
    
    take in dorm name
    get dorm object with ID
    build dorm object
    search usage class with object 
    and return
    */
        const Usage = Parse.Object.extend("water_use_scoreboard");
        const query = new Parse.Query(Usage);
        query.equalTo("dorm_pointer",dormObj);
        query.include("section_pointer");
        return query.findAll().then((results)=>{
            //console.log(results);
            return results;
        });

    

}

export const getSectionScores = (sectionObj) =>{

}

export const getDormObj = (name) => {
    const Dorm = Parse.Object.extend("dorms");
    const query = new Parse.Query(Dorm);
    query.equalTo("name",name);
    return query.find().then((result)=>{
        return result[0];
    });
}

export const getSectionName = (sectionObj) =>{
    console.log(sectionObj);
    const Section = Parse.Object.extend("sections");
    const query = new Parse.Query(Section);
    //query.equalTo("objectID",sectionObj)
    query.find(sectionObj).then((result)=>{
        console.log(result);
    })
}