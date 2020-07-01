var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    cars : String ,
    class : String,
    img :String,
    commentaire: [
        {
            user : String,
            comment : String,
            date : {type : Date , default : Date.now()}
        }
    ]
})
module.exports = mongoose.model("cars",todoSchema)