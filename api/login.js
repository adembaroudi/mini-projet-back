var express = require("express");
var users = require("./../Models/UserSchema");
var jwt= require('jsonwebtoken');
var bcrypt = require("bcryptjs");
var router = express.Router(); 
router.post("/login2",(req,res)=>{
    users.findOne({email : req.body.email},(err,resultat)=>{
        console.log(resultat, req.body)
        const verif = bcrypt.compareSync(req.body.password, resultat.password)
        if (err) res.send(err);
        else{
            if (verif===true){
                var token = jwt.sign({
                    exp : Math.floor(Date.now()/1000)+(60*120),
                    data : resultat
                },'secret');
                res.send({access_token: token})
            }
            else{
                console.log("le");
                res.send(err); 
            }
        }
        // res.send(resultat);
        console.log("gazouz");
    });
});
module.exports = router;