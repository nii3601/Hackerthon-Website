import Parse from "parse";


export const getDormNames = () => {
    const Dorm = Parse.Object.extend("dorms");
    const query = new Parse.Query(Dorm);
    return query.find().then((results)=>{
        return results;
    })
}