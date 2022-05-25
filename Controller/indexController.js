const Model = require("../Models/Model.js");
function fetchModel(route){
    return ("NOT IMPLEMENTED YET");
}
function fetchView(data){
    console.log(data);
    return (data);
}
function parse(route, res){
    if(route != undefined){
        (()=>{
            let data = fetchModel(route);
            let view = fetchView(data);
            res.send(view);
        })()
    }
    else{
        res.send("WIP");
    }
}

module.exports = {
    parse: parse
}
