var express = require("express");
var users = require("./../Models/UserSchema");
var multer = require("multer");
var router = express.Router();
var upload = multer({dest : "/upload"});
router.get('/upfile/:orginalname',function(req,res){
    
})
module.exports = router;
