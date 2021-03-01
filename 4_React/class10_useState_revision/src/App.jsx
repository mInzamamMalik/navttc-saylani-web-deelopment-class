import logo from './logo.svg';
import './App.css';
import { useState } from "react"



function App() {

  var a = 20;
  function increment() {
    a = a + 1;
    a = a + 1;
    console.log(a);
  }

  const [value, setvalue] = useState(0);
  function incrementState() {
    console.log("11111111");
    setvalue(function(prev){
      return prev + 1;
    })
    setvalue(function(prev){
      return prev + 1;
    })
  }
  return (<>
    <div>Normal Variable {a} </div>
    <button onClick={increment}>Plus</button>
    <br />
    <br />
    <br />
    <div>State Variable {value} </div>
    <button onClick={incrementState}>Plus</button>
  </>);
}
export default App;
