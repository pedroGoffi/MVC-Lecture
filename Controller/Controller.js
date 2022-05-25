const Model = require("../Models/Model.js");
const View  = require("../Views/View.js")
function parse(route, res){
    route.route = route.route || "index";
    let data = Model.get(route);
    let view = View.get(data, route);
    View.load(view, res);
}

module.exports = {
    parse: parse
}
