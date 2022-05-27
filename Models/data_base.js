class data_base{
    constructor(){
        const fs = require("fs")
        const sqlite3 = require("sqlite3").verbose();

        this.dbName = `${JSON.parse(fs.readFileSync("./settings.json")).dir}/.G_db`;
        this.db = new sqlite3.Database(
            `${this.dbName}`,
            sqlite3.OPEN_READWRITE,
            (err) => {
                if(err) return console.error(err.message);
                console.log("[db-info]: db created");
            }
        );
    }
    exists(){
        [""]
        return false;
    }
    create_table(context){
        this.db.run(`CREATE TABLE ${context}`);
    }
    close(){
        db.close((err) => {return console.error(err.message)});
    }
}
module.exports = {
    db: data_base
}
