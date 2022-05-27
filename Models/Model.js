const Db = require("./data_base.js").db;
const db = new Db()
function ignore_common(route){
    return true;
}
function get(route){
    if(!ignore_common(route)){
        console.log("Not common");
    }
    return route;
}
module.exports = {
    get: get
};
