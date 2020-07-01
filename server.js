var express = require("express");
var bodyParser= require("body-parser");
var db = require ('./Db/Database');
var userApi = require('./api/userApi');
var todos = require('./api/TodoApi');
var affectToDoToUser = require('./api/affectToDoToUser');
var deleteToDoFromUser= require('./api/deleteToDoFromUser');
var mailer = require('./api/mailer');
var image = require('./api/savePictures');
var imagetodo = require('./api/savePicturetodo');
var send =require('./api/sendPictures');
var comment = require("./api/comment");
var cors = require('cors');
const socketIo = require("socket.io");
require('./api/passport')
var app = express();
var path = require('path');
var http = require('http');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
var dir = path.join(__dirname,"upload");
app.use("/upload",express.static(dir ))
app.use("/users",userApi);
app.use("/todos",todos);
app.use("/affectToDoToUser",affectToDoToUser);
app.use("/deleteToDoFromUser",deleteToDoFromUser);
app.use("/mailer",mailer);
app.use("/image/user",image);
app.use('/image/todo',imagetodo);
app.use('/comment', comment);
const server = http.createServer(app);
const io = socketIo(server); 
app.use("/send",send);
app.set('io', io);
server.listen(3000,function(){
    console.log("running"+3000); 
});
