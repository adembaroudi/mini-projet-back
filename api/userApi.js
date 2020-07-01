var express = require('express');
var router = express.Router();
var users = require('./../Models/UserSchema');
var register = require('./registerApi');
var login = require ('./login');
router.use('/register', register);
router.use('/login',login)
router.post("/insertdata", function(req,res){
    var user = new users(req.body);
    user.save(function (err) {
        if (err) res.send(err);
        res.send({
            message: 'new user created',
            data: user
        });
    });
});
router.delete("/deletedata/:id", function (req, res) {
    var user = users;
  user.findByIdAndRemove(req.params.id, function (err) {
            if (err)
                res.send(err);
    res.json({
                status: "success",
                message: 'user deleted'
            });
        });
    });
    router.put("/updata/:id",function (req, res) {
    users.findByIdAndUpdate( req.params.id,req.body,function (err, user) {
        if (err) res.send(err); 
            if (err)
                res.json(err)
                res.json({
                    message : 'user updated',
                    data : user
                });
    
    });
});
router.get('/getdata',function (req, res) {
    var user = users
    user.find({},function (err, users) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "users retrieved successfully",
            data: users
        });
    });
});
router.get("/getdata/:id", function (req, res) {
    var user = users;
  user.findById(req.params.id, function (err) {
            if (err)
                res.send(err);
    res.json({
                status: "success",
                message: 'user retrieved successfully'
            });
        });
    });

module.exports = router;