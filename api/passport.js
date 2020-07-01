var passport = require("passport");
var BearerStrategy = require('passport-http-bearer').Strategy;
var userLog= require('./../Models/UserSchema');
var jwt = require('jsonwebtoken');
passport.use( new BearerStrategy(
    function(token,done){
        jwt.verify(token,'secret',function(err,decoded){
            console.log(decoded);
            userLog.findOne({_id: decoded.data._id},(err,user)=>{
                if (err){return done(err);}
                if (!user){return done(null,false);}
                return done (null,done)
            });
        })}
));