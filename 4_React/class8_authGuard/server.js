var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var morgan = require("morgan");
var jwt = require('jsonwebtoken');
var path = require("path")

const user = [{
    name: "John Doe",
    email: "john@gmail.com",
    password: "123456",
    phone: "+1 234 3454 234",
    gender: "male",
    address: "suite#23, 26th street, wessex, north carolina",
}];
const SERVER_SECRET = process.env.SECRET || "1234";

var app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(cors({
    origin: ['http://localhost:3000', "*"],
    credentials: true
}));


app.post("/signup", (req, res, next) => {

    if (!req.body.name
        || !req.body.email
        || !req.body.password
        || !req.body.phone
        || !req.body.gender
        || !req.body.address) {

        res.status(403).send(`
            please send name, email, passwod, phone and gender in json body.
            e.g:
            {
                "name": "malik",
                "email": "malikasinger@gmail.com",
                "password": "abc",
                "phone": "03001234567",
                "gender": "Male"
                "address": "some address"
            }`)
        return;
    }

    const isExist = user.filter(eachUser => eachUser.email === req.body.email)

    if (isExist.length === 0) {
        user.push({
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
            "phone": req.body.phone,
            "gender": req.body.gender,
            "address": req.body.address,
        })
        res.send({ message: "user created" })

    } else {
        res.status(409).send({ message: "user already exist" })
    }

})

app.post("/login", (req, res, next) => {

    console.log(req.body)

    if (!req.body.email || !req.body.password) {
        res.status(403).send(`
            please send email and passwod in json body.
            e.g:
            {
                "email": "John@gmail.com",
                "password": "123456",
            }`)
        return;
    }

    const isExist = user.filter(eachUser => eachUser.email === req.body.email)
    console.log("isExist: ", isExist);

    if(!isExist.length){ // user not exist
        res.status(401).send({
            message: "incorrect email or password"
        }) 
        return;
    }

    if (req.body.email === isExist[0].email && req.body.password === isExist[0].password) {
        console.log("matched");

        var token =
            jwt.sign({
                id: user._id,
                name: user.name,
                email: user.email,
            }, SERVER_SECRET)

        res.cookie('jToken', token, {
            maxAge: 86_400_000,
            httpOnly: true
        });

        res.send({
            message: "login success",
            user: user
        });

    } else { // not matched
        console.log("not matched");
        res.status(401).send({
            message: "incorrect email or password"
        })
    }
})

app.use(function (req, res, next) {
    console.log("req.cookies: ", req.cookies);
    if (!req.cookies.jToken) {
        res.status(401).send("include http-only credentials with every request")
        return;
    }
    jwt.verify(req.cookies.jToken, SERVER_SECRET, function (err, decodedData) {
        if (!err) {
            const issueDate = decodedData.iat * 1000;
            const nowDate = new Date().getTime();
            const diff = nowDate - issueDate; // 86400,000

            if (diff > 300000) { // expire after 5 min (in milis)
                res.status(401).send("token expired")
            } else { // issue new token
                var token = jwt.sign({
                    id: decodedData.id,
                    name: decodedData.name,
                    email: decodedData.email,
                }, SERVER_SECRET)
                res.cookie('jToken', token, {
                    maxAge: 86_400_000,
                    httpOnly: true
                });
                req.body.jToken = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})

app.get("/profile", (req, res, next) => {

    console.log(req.body)



    res.send({
        profile: user
    })
})

app.post("/logout", (req, res, next) => {
    res.cookie('jToken', "");
    res.send("logout success")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is running on: ", PORT);
})