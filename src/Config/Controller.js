const fs = require('fs');
let __SERVER__      =  require("./Server.js");
__SERVER__          =  new __SERVER__.server();
let __configData__  = JSON.parse(fs.readFileSync("./settings.json"))
let server          = __SERVER__.server;
let port            = __configData__.server.port;


server.get("/:route*?", (req, res) => {
    if (req.params.route == undefined){
        req.params.route = "index";
    }
    try{
        let _Controller_ = require(`../../Controller/Controller.js`);
        _Controller_.parse(req.params, res);
    } catch (err) {
        let _Controller_ = require("./OnLoadError.js");
        _Controller_.parse(req.params.route, res, err);
    }
})
server.listen(port, (req, res) =>{
    console.log(`Listening at localhost:${port}`);
})


