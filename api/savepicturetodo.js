var express = require("express");
var todo = require("./../Models/TodoSchema");
var multer = require("multer");
var router = express.Router();
var storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null,process.cwd()+'/upload')
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now().toString()+'.'+file.originalname.split(".")[file.originalname.split(".").length -1])
    }
})


var upload = multer({storage : storage});

router.post('/upfile/:id', upload.single('file'), (req, res) => {
    var link = "http://localhost:3000/upload/"+req.file.filename
    todo.findByIdAndUpdate(req.params.id, {$set:{img: link}},(err,resultat)=>{
        if(err) 
        res.send(err);
        
        res.send(resultat)
        console.log("done");
    });
    //res.send(resultat)
});
module.exports = router;