
// const url = 'https://realtimetweeter.herokuapp.com';
const url = "http://192.168.50.84:3000";
var userPost = document.getElementById("userPost");

let currentUser;
if (localStorage.getItem("currentUser")) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
}
var socket = io(url);

socket.on('connect', function () {
    console.log("connected")
});

const signup = () => {

    var userEmail = document.getElementById("email").value.toLowerCase();
    var userPassword = document.getElementById("password").value
    var userName = document.getElementById("name").value
    let obj = {
        userEmail: userEmail,
        userPassword: userPassword,
        userName: userName,
        userPosts: [],
    };

    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // console.log(Http.responseText)
            let jsonRes = JSON.parse(Http.responseText)

            if (jsonRes.status === 200) {
                alert(jsonRes.message);
                window.location.href = "login.html";
            } else {
                alert(jsonRes.message);
            }
        }
    }
    return false;
}

const login = () => {

    var userEmail = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value

    obj = {
        userEmail: userEmail,
        password: password,
    }
    // console.log(obj);

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // console.log(Http.responseText);
            let jsonRes = JSON.parse(Http.responseText);

            if (jsonRes.status === 200) {
                alert(jsonRes.message);
                localStorage.setItem("currentUser", JSON.stringify(jsonRes.currentUser));
                // console.log(currentUser);
                window.location.href = "dashboard.html";
            }
            else {
                alert(jsonRes.message);
            }
        }
    }
    return false;
}

const post = () => {

    let tweetText = document.getElementById("userPost").value;
    var postContent = document.createElement("li");

    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/tweet");
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        userName: currentUser.userName,
        tweetText: tweetText,
    }));

    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            jsonRes = JSON.parse((Http.responseText));
            console.log("posted success");
        }
    }
}

const getTweets = () => {

    if (localStorage.getItem("currentUser")) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
        document.getElementById("welcomeUser").innerHTML = `Welcome, ${currentUser.userName}`
    }

    if (!currentUser) {
        welcomeUser.innerHTML = "Signup and tweet your thoughts away";
        document.getElementById("lgBtn").innerText = "Signup Now";
    }

    const Http = new XMLHttpRequest();
    Http.open("GET", url + "/tweets");
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            let tweets = JSON.parse((Http.responseText));

            for (let i = 0; i < tweets.length; i++) {
                // console.log(tweets[i].userName)

                var eachTweet = document.createElement("li");
                eachTweet.innerHTML =
                    `<h4 class="userName">
                    ${tweets[i].userName}
                </h4> 
                <p class="userPost">
                    ${tweets[i].tweetText}
                </p>`;
                // console.log(`User: ${tweets[i]} ${tweets[i].userPosts[j]}`)
                document.getElementById("posts").appendChild(eachTweet)

            }
        }
    }
}

socket.on("NEW_POST", (newPost) => {

    let jsonRes = JSON.parse(newPost);

    var eachTweet = document.createElement("li");
    eachTweet.innerHTML =
        `<h4 class="userName">
        ${jsonRes.userName}
    </h4> 
    <p class="userPost">
        ${jsonRes.tweetText}
    </p>`;
    // console.log(`User: ${tweets[i]} ${tweets[i].userPosts[j]}`)
    document.getElementById("posts").appendChild(eachTweet)
})


let logout = () => {
    if (currentUser === null || currentUser === undefined) {
        window.location.href = "index.html";
    }
    else {
        currentUser = null;
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    }

}
// DONE WITH IT