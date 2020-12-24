

let users = [];


let express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')

let app = express();

app.use(cors());

// app.use(function (req, res, next) {
//     console.log("Method is: ", req.method)
//     console.log("URL is: ", req.url)
//     console.log("connection is: ", req.connection.remoteAddress)
//     console.log("connection is: ", req.connection.remotePort)
//     // res.send("some response");
//     next();
// });

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get("/bulb", function (req, res, next) {
    res.send("bulb is On");
});

app.post("/bulb", function (req, res, next) {

    console.log("body: ", req.body);
    res.send("bulb is created: " + JSON.stringify(req.body));
});

app.put("/bulb", function (req, res, next) {
    res.send("Bulb state is changed");
});

app.delete("/bulb", function (req, res, next) {
    res.send("bulb is deleted");
});



app.listen(3000, () => {
    console.log("server is running on 3000");
})