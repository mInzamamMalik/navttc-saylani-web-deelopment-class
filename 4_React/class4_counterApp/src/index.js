import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var name = "Malik";

function Room() {
  const [value, setValue] = useState(0);

  function add() {
    setValue((previousValue) => previousValue + 1)

    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)
  }
  function sub() {
    // setValue((previousValue) => previousValue - 1)
    // setValue((previousValue) => previousValue - 1)
    // setValue((previousValue) => previousValue - 1)
    // setValue((previousValue) => previousValue - 1)
    // setValue((previousValue) => previousValue - 1)
    setValue(value - 1)
  }



  return (
    <div>

      {name}

      {   console.log("re-render")}

      <button onClick={add}>     +++++ </button>

      <h1 > {value}   </h1>

      <button onClick={sub}>     ----- </button>

    </div>
  );
}

ReactDOM.render(<Room />,
  document.getElementById('root')
);


//////////// DESTRUCTURE EXPLAINED



/////////// ARRAY
var arr = ["Ali", "zeeshan", "nadeem"];
// var name1 = arr[0];
// var name2 = arr[1];
// var name3 = arr[2];
var [name1, name2, name3] = arr; // this will do the same as 3 lines above




/////////// OBJECT
var obj = {
  name: "Ali",
  clas: "primary",
  subject: "science"
}
// var name = obj.name;
// var clas = obj.clas;
// var subject = obj.subject;
var {name, clas, subject} = obj; // this will do the same as 3 lines above