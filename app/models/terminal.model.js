const sql = require("./db.js");
const Terminal = function(terminal){
    this.id = terminal.id;
    this.terminal_name = terminal_name;
    this.lng = lng;
    this.lat = lat;
};
//Get all terminal data
Terminal.getAll = result => {
    sql.query("SELECT * FROM tbl_terminal ", (err, res) =>{
        if(err) {
            console.log("Error : ", err);
            result(null, err);
            return;
        }
        console.log("result ", res);
        result(null, res);
    });
}

Terminal.findById = (id, result) =>{
    sql.query(`SELECT * FROM tbl_terminal WHERE id = ${id}`, (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.length){
            console.log(res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found"}, null);
    });
};

module.exports = Terminal;
//