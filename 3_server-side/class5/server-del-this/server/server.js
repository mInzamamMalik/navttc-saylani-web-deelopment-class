
let users = [
    {
        name: "Sameer",
        fathername: "Ali",
        email: "sameer@gmail.com",
        password: "123"
    },

];


var PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
let fs = require('fs');


var app = express();

app.use(cors());

// jaisa ya hum nai pora ak log banya han is kae liya hum package use karay gayn jo banae howa
// wo huma nai use karna han iskae liya "Morgan package use karay gayn"
// app.use(function (req, reponse, next) {
//     console.log("Method :" + req.method);
//     console.log("URL :" + req.url);
//     console.log("Connection is :" + req.connection.remoteAddress);
//     console.log("Connection is Port :" + req.connection.remotePort);
//     next();
// });

app.use(morgan('dev'));
app.use(bodyParser.json())



// app.get('', (req, res) => {
//     res.render('index');
// })

// app.get('/signup', (req, res) => {
//     res.render('signup');
// })



// app.get('/', function (req, res) {
//     res.render('index.html');
// });


// app.get('/', (request, response, next) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             respone.write('Whoops! File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });

// });
app.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("signup success full");
});
app.post('/signup', (req, res) => {
    let isFound = false;


    for (i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        res.send({
            message: "user already exist with this email",
            status: 459
        });
    } else {
        users.push(req.body);
        // console.log(req.body);
        console.log("users: ", users);
        res.send({
            message: "Sign Up Succesfuly",
            status: 200
        });
    }
})

app.post('/login', (req, res) => {

    let isFound = false;
    for (let i = 0; i < users.length; i++) {

        console.log(req.body.email,  users[i].email)
        if (req.body.email === users[i].email) {
            isFound = i;
            break;
        }
    }

    if (isFound) {
       
        if (users[isFound].password === req.body.password) {
            res.send({
                user: users[isFound],
                message: "Login Succes",
                status: 200
            });
        } else {            
            res.send({
                message: "incorrect password",
                status: 400
            });
        }

    } else {
        res.send({
            message: "User Not Found",
            status: 400
        });
    }

})




// app.post('/index', (req, res) => {
//     console.log('Got body:', req.body);
//     res.sendStatus(200);
// });

app.listen(PORT, () => {
    console.log("server is running on " + PORT);
})