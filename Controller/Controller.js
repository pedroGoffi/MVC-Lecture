const Model = require("../Models/Model.js");
const View  = require("../Views/View.js")
function parse(route, res){
    route.route = route.route || "index";
    isCommon = false;
    [   "png",  "css",
        "js"
    ].forEach( type => {
        if (route.route.endsWith(type)){
            isCommon = true;
            return;
        }
    });
    let context = null;
    if(!isCommon){
        context = Model.get(route);
    } 
    let view = View.get(context, route);
    View.load(view, res);
}

module.exports = {
    parse: parse
}
