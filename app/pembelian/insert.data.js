const sql = require("../models/db");
sql.query("INSERT INTO pembelian VALUES(null, 'Husein', 200000, current_timestamp(), 'Item', 'image.png')", (err, res) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Data berhasil ditambahkan : " + res.affectedRows);
    }
})