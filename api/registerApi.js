var express = require("express");
var users = require("./../Models/UserSchema");
var router = express.Router();
router.post("/register", (req, res) => {
    users.create(req.body, (err, resultat) => {
        if (err) res.send(err);
        res.send(resultat);
        console.log("reg done");
    });
});
module.exports = router;
