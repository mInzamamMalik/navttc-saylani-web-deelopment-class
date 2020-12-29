
var express = require("express");
var path = require("path");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require("http");
var socket = require('socket.io');

var server = http.createServer(app);
var io = socket(server, {
    path: '/test'

});



var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use("/", express.static(path.join(__dirname, 'public')))






server.listen(PORT, () => {
    console.log("server is running on: ", PORT);
})

io.on('connection', (userAdress) => {
    console.log('a user connected');
});

io.on('disconnect', (socket) => {
    console.log('a user connected');
});





