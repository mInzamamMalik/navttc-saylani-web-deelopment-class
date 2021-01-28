import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  const [value, setValue] = useState(true);
  // function abc() {
  //   setValue(false)
  // }
  function abc() {
    setValue((previousValue) => !previousValue)
  }
  return (
    <div>
      <div > the room is   {(value === true) ? "Bright" : "Dark"}    </div>
      <button onClick={abc}> Change </button>
    </div>
  );
}

ReactDOM.render(<Room />,
  document.getElementById('root')
);
