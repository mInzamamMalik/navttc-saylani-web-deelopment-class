var axios = require("axios");

axios.post('http://localhost:3000/testing')
  .then(function (response) {
    // handle success
    console.log("response: ", response.status);
  })
  .catch(function (error) {
    // handle error
    console.log("error ==============> ", error.response.status);
  })
  .then(function () {
    // always executed
  });


