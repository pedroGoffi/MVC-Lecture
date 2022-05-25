function parse(route, res, err){
    console.log(route);
    res.send
    (`
        <h2>ERROR: COULD NOT FIND (${route}) inside Controllers.</h2>
        <h3>Please certify that there is a [${route}Controller.js] inside the folder Controller.</h3>
        <h4>${err}</h4>
    `);
}
module.exports = {
    parse: parse
}
