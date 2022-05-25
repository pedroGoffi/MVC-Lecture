const express = require("express");
const cors    = require("cors");

class Server{
    constructor(){
        this.server = express();
        this.server.use(express.urlencoded({
            extended:true
        }));
        this.server.use(express.json());
        this.server.use(cors());
    }
}

//export { server }
module.exports = {
    server: Server
};

