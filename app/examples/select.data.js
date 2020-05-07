const sql = require("../models/db");
sql.query("SELECT * FROM tbl_terminal", (err, res) => {
   if(err){
       console.log("Error: ", err);
   } 
   else{
       console.log("Result : ",res);
   }
});