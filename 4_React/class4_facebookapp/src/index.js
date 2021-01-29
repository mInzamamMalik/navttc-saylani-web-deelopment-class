import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Room() {
  const [data, setData] = useState([]);

  function post(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let postText = document.getElementById("postText").value;
    let newData = {
      postText: postText,
      name: name
    }
    console.log(postText);

    setData((previousValue) => {
      return previousValue.concat([newData]);
    })
  }


  return (
    <div>

      <form onSubmit={post} style={{margin: "10px"}}>

        <input required placeholder="name" type="text" id="name" />
        <br/>
        <textarea required placeholder="what is in your mind" type="text" id="postText" />
        <br/>
        <button> Post </button>
      </form>

      { console.log("data: ", data)}

      {/* <div>
      <h1>{data[0].name}</h1>
      <h3>{data[0].postText}</h3>
      </div>

      <div>
        <h1>{data[1].name}</h1>
        <h3>{data[1].postText}</h3>
      </div>

      <div> 
        <h1>{data[2].name}</h1>
        <h3>{data[2].postText}</h3>
      </div> */}

      {data.map((eachItem, i) => {
        return (
          <div key={i} style={{border: "1px solid black", margin: "5px", width: "80%"}}>

            <h2>{eachItem.name}</h2>
            <h6>{eachItem.postText}</h6>

          </div>
        )
      })}
    </div>
  );
}

ReactDOM.render(<Room />,
  document.getElementById('root')
);

