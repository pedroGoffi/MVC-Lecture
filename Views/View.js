const fs = require("fs");
const base_dir = JSON.parse(fs.readFileSync("./settings.json"));
function load(data, res){
    res.sendFile(data);
}
function get(data, route){
    if (route.route.endsWith(".png")){
        return (`${base_dir.dir}/wwwroot/images/${route.route}`)
    }
    else if (route.route == "GoffiJS.js"){
        return (`${base_dir.dir}/src/GoffiJS/${route.route}`);
    }
    else if (route.route.endsWith(".css")){
        return (`${base_dir.dir}/wwwroot/css/${route.route}`);
    }
    else if (route.route.endsWith(".js")){
        return (`${base_dir.dir}/wwwroot/js/${route.route}`);
        
    }
    else if (route.route.endsWith(".ico")){
        return (`${base_dir.dir}/wwwroot/${route.route}`);
    }
    else if(route.route != "src"){
        return (route[0] === undefined)? 
            (`${__dirname}/${route.route}/${route.route}.html`)
            : (`${__dirname}/${route.route}/${route[0]}.html`);
    }
    else{
        console.assert(
            false, 
            `ERROR: Could not find the package for the route: \`${route.route}/${route[0]}\``
        );
    }
}
module.exports = {
    get:  get,
    load: load
};
