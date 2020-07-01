var express = require("express");
var users = require("./../Models/UserSchema");
var router = express.Router();
router.put("/upuser/:id/:todoid", function (req, res) {
    users.findByIdAndUpdate(req.params.id, { $push: { todos: req.params.todoid } }, (err, resultat) => {
        if (err) res.send(err);
        res.send(resultat);
    });
});
router.get("/findusers", function (req, res) {
    users.find({}).populate('todos').exec(function (err, resultat) {
        if (err) res.send(err);
        res.send(resultat);
    });
});
module.exports = router;