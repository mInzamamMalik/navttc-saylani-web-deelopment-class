

// const url = 'https://login-servers.herokuapp.com';
const url = 'http://localhost:5000';


function postSign() {
    var user = {
        name: document.getElementById('name').value,
        fathername: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // document.getElementById("result").innerText = Http.responseText;

            let jsonRes = JSON.parse(Http.responseText);

            if (jsonRes.status === 200) {

                document.getElementById('name').value = "";
                document.getElementById('fname').value = "";
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";

                alert(jsonRes.message);
                window.location.href = "./login.html"
            } else {
                document.getElementById("result").innerText = jsonRes.message;

            }
        }
    }

    return false;
}

function login() {

    let Emails = document.getElementById("lemail").value;
    let Passwords = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Emails,
        password: Passwords
    }));

    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {



            console.log(Http.responseText);

            let jsonRes = JSON.parse(Http.responseText)

            if (jsonRes.status === 200) {

                document.getElementById('lemail').value = ""
                document.getElementById('lpassword').value = ""

                document.getElementById("Result").innerText = jsonRes.message;
                document.getElementById("name").innerText = "Name :" + jsonRes.user.name;
                document.getElementById("fname").innerText = "Father Name :" + jsonRes.user.fathername;
                document.getElementById("email").innerText = "Email :" + jsonRes.user.email;
            } else {
                document.getElementById("Result").innerText = jsonRes.message;

            }


        }
    }


    return false;
}

