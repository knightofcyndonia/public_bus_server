const sql = require("../models/db");
sql.query("SELECT * FROM pembelian", (err, res) =>{
    if(err){
        console.group(err);
    }
    else{
        console.log("Result: ", res);
    }
});