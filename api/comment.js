var express = require('express');
var router = express.Router();
// var comment = require('../models/commentSchema');
var cars = require("./../Models/TodoSchema");
var passport = require('passport');

router.put('/commentaire/:id',(req,res)=>{
    const io=req.app.get("io")
cars.findByIdAndUpdate(req.params.id,{$push:{commentaire:req.body}},(err,resultat)=>{
    if(err){
        res.send(err)
    }
    else{
        io.emit("newComment",resultat);
        res.send(resultat);
    }
})
})
router.get('/getcommentaire/:id',(req,res) =>{
cars.findById(req.params.id,(err,resultat)=>{
    if(err){
res.send(err);
    }
    else{
        res.send(resultat);
    }
    
})
})

// router.post('/postComment/:idComment',passport.authenticate('bearer', { session: false }),function (req,res){
//     Chat.findById(req.params.idComment, function(err, comment){
//         if(err){
//             res.send(err);
//         }
//         const io = req.app.get('io');
//         comment.messages.push(req.body);
//         comment.findByIdAndUpdate(comment._id, {$set: {messages: comment.messages}}, function(err2, comment2) {
//             io.emit('newCommentPosted', comment2);
//         })
//     })
// });

// router.get('/getCommentvb /:idUser1/:idUser2',passport.authenticate('bearer', { session: false }), function (req,res){    
//        comment.findOne({user1: req.params.idUser1, user2:req.params.idUser2}, function(err,comment1) {
//         if(err){
//             res.send(err);
//         }
//         if(!comment1){
//           comment.findOne({user1: req.params.idUser2, user2:req.params.idUser1}, function(err2, comment2) {
//               if(err2) {
//                   res.send(err2);
//               }
//               if(!comment2) {
//                 var comment = new comment({user1: req.params.idUser1, user2: req.params.idUser2, messages: []});
//                 comment.save( function(err3,comment){
//                     if(err3) {
//                         res.send(err3)
//                     }
//                     res.send(comment);
//                 });
//               }else{
//               res.send(comment2);
//             }
//           })

//         } else {
//             res.send(comment1);
//         }
//     });
        
// });


module.exports = router;