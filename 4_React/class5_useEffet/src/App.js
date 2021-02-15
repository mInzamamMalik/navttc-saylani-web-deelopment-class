import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";


function App() {

  const [posts, setPosts] = React.useState([]);
  const [click, setClick] = React.useState(true);



  React.useEffect(() => {

    console.log("I M RUNING");

    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
        setPosts(newPosts);
      });


  }, [click]);





  return (
    <div>
      <h1>/r/reactjs</h1> 

      <button onClick={ ()=>setClick(!click)  }>Reload</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>

          
        ))}
      </ul>
    </div>
  );
}

export default App;
