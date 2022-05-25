const fs = require("fs");
const base_dir = JSON.parse(fs.readFileSync("./settings.json"));
function load(data, res){
    res.sendFile(data);
}
function get(data, route){
    if (route.route.endsWith(".css")){
        return (`${base_dir.dir}/wwwroot/css/${route.route}`);
    }
    else if (route.route.endsWith(".js")){
        return (`${base_dir.dir}/wwwroot/js/${route.route}`)
        
    }
    else if (route.route.endsWith(".ico")){
        return (`${base_dir.dir}/wwroot/${route.route}`)
    }
    else if(route.route != "src")
        return (`${__dirname}/${route.route}/${route.route}.html`);
}
module.exports = {
    get:  get,
    load: load
};
