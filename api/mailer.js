var express = require("express");
var nodemailer = require('nodemailer'); 
  var router = express.Router();
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let mailTransporter = nodemailer.createTransport({ 
    service: 'Gmail',
    tls:{
        rejectUnauthorized: false
    },
    port: 465,
    secure: false,
    auth: { 
        user: 'adembaroudi3177@gmail.com',
        pass: '******'
    } 
});
router.post("/send", function (req,res) {
    let mailDetails = { 
        from: '<adembaroudi3177@gmail.com>', 
        to: '<adembaroudi3177@gmail.com>', 
        subject: 'Nodemail', 
        html: '<p>Hello!</p><p>Mail send working</p>',
        createTextFromHtml: true
    }; 
    mailTransporter.sendMail(mailDetails,(err, data)=> { 
          if(err) { 
              console.log(err); 
              res.send(err)
            } else { 
                console.log('Email sent successfully'); 
                res.send(data);
                res.send({
                    message:'mail send success!'
                })
            } 
        }); 
    })
        module.exports =router;