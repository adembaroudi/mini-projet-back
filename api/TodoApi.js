var router = require('express').Router();
var passport = require('passport');
var todos = require('./../Models/TodoSchema');
router.post("/inserttodo", passport.authenticate('bearer',{session:false}),
function(req,res){
    todos.create(req.body,(err,resultat) =>{
        if (err) res.send(err);
        res.send(resultat);
    });
});
router.delete("/removedata/:id", function (req, res) {
  todos.findByIdAndRemove(req.params.id, function (err) {
            if (err)
                res.send(err);
    res.json({
                status: "success",
                message: 'todo deleted'
            });
        });
    });
    router.put("/putdata/:id",function (req, res) {
    todos.findByIdAndUpdate( req.params.id,req.body,function (err, todo) {
        if (err) res.send(err); 
            if (err)
                res.json(err)
                res.json({
                    message : 'todo updated',
                    data : todo
                });
    
    });
});
router.get('/findall',function (req, res) {
    todos.find({},function (err, todos) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "todos retrieved successfully",
            data: todos
        });
    });
});
router.get("/finddata/:id", function (req, res) {
  todos.findById(req.params.id, function (err,todos) {
            if (err)
                res.send(err);
    res.json({
                status: "success",
                message: 'todo retrieved successfully',
                data : todos
            });
        });
    });
module.exports = router;