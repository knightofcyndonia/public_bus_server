const sql = require("../models/db");
sql.query("CREATE TABLE pembelian (id int NOT NULL AUTO_INCREMENT, supplierName VARCHAR(200), totalPembayaran int, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, item varchar(100) NULL, image varchar(100) NULL, PRIMARY KEY(id))", (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Table berhasil dibuat");
    }
});