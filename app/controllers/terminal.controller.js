const Terminal = require("../models/terminal.model");

//Get All Terminal data
exports.findAll = (req, res) => {
    Terminal.getAll((err, data) => {
        if (err) {
            res.status(500).send({
               message : err.message || "Terjadi Kesalahan"
            });
        }
        else{
            res.send(data);
        }
    });
}

//Get terminal by id
exports.findOne = (req, res) => {
    Terminal.findById(req.params.id, (err, data) =>{
        if(err){
            if(err.kind === "not found"){
                req.status(404).send({
                    message : `Can't find Terminal with id ${req.params.id}`
                })
            }
            else{
                res.status(500).send({
                    message : `Error when get id ${req.params.id}`
                });
            }
        }else{
            res.send(data);
        }
    })
}