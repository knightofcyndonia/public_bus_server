module.exports = app => {
    const terminal = require("../controllers/terminal.controller");

    //Get all Terminal
    app.get("/api/terminal/", terminal.findAll);

    //Get terminal by Id
    app.get("/api/terminal/:id", terminal.findOne);
    
}