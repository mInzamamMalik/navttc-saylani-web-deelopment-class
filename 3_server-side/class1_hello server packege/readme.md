


### steps to make hello world of express:

1) make a javascript file with a name of your choice such as `server.js` or `app.js`

2) run `npm init` command and answer all question, you may leave all answers empty ;-)

3) goto `package.json` file and add start script as `node <filename>.js`

4) install express package with command `npm install express` 

5) start writing code in your javascript file:

```
var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})

server.listen(3000, () => {
    console.log("server is running on port 3000");
})

```

6) run `npm start` command to start server
7) ask your friend to access your server by writing your ip address in their browser (your friend should be connected to your wifi ;-) )

8) try changing server code a little bit and see what happens

# Try to deploy this server code on heroku
you may get help from here: https://devcenter.heroku.com/articles/getting-started-with-nodejs

