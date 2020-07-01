var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var users = new mongoose.Schema({
    userName : String , 
    email : String , 
    password : String,
    img : String , 
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'cars'}]
});
users.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var st = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password,st)                                                                                                                
    };                                                                                                                                                                         
    next()                                                                                                                                                                     
}); 
module.exports = mongoose.model("user",users)