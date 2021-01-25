

// named function
function abc() {
    console.log("some code");
}

// anonymous function, in variable
var abcFunction = function () {
    console.log("some code");
}

    // anonymous function, self calling
    (function () {
        console.log("some code");
    })()

    //es6 arrow function, self calling
    (() => {
        console.log("some code");
    })()

//es6 arrow function, in variable
let es6Function = () => {
    console.log("some code");
    return "return value"
}

//es6 arrow function, in variable with single line return
let es6Function = () => "return value" // will return string  "return value" 
let es6Function = () =>  var1 < var3 // will return true or false


