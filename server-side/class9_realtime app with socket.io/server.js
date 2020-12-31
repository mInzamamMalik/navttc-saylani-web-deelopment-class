let users = [
    {
        userEmail: "azhar40@live.co.uk",
        userPassword: "azharkhan",
        userName: "Azhar khan",
        userPosts: [],
    },
];

let tweets = [{
    userName: "some name",
    tweetText: "some text"
}]



var http = require("http");
var path = require("path");
let socketIo = require("socket.io");
var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var morgan = require("morgan");

var app = express();

var server = http.createServer(app);
var io = socketIo(server);



app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));

const PORT = process.env.PORT || 3000;

app.post("/signup", (req, res, next) => {

    var currEmail = req.body.userEmail;
    var isFound = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail === currEmail) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        res.send({
            message: "Email already exsist",
            status: 400,
        })
    } else {
        users.push({
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword,
            userName: req.body.userName,
            userPosts: [],
        });
        res.send({
            message: "Signed up succesfully",
            status: 200,
        })
    }
});

app.post("/login", function (req, res, next) {


    let email = req.body.userEmail;
    let password = req.body.password;
    let isFound = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail === email) {
            isFound = i;
            break;
        }
    }
    if (isFound) {
        if (users[isFound].userPassword === password) {

            res.send({
                message: "Signed in succesfully",
                status: 200,
                currentUser: {
                    userName: users[isFound].userName,
                    userEmail: users[isFound].userEmail,
                }
            });
        } else {
            res.send({
                message: "password is wrong",
                status: 400,
            });
        }

    } else {
        res.send({
            message: "User not found",
            status: 400,
        })
    }
})

io.on("connection", (user) => {
    console.log("user connected");
})

app.post("/tweet", (req, res, next) => {

    tweets.push({
        userName: req.body.userName,
        tweetText: req.body.tweetText,
    })
    res.send(tweets);

    io.emit("NEW_POST", JSON.stringify(tweets[tweets.length - 1]))
})

app.get("/tweets", (req, res, next) => {
    res.send(tweets);
});


server.listen(PORT, () => {
    console.log("server is runnin on port " + PORT);

})
