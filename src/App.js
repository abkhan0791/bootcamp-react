import React, {useState} from 'react';
import Namaz from './namaz.js';
import './App.css';

function App() {
  let [count, setCount] = useState(5)
  let [isColor, setColor] = useState(false)
  return (
    <div className={`body ${isColor ? 'App' : ''}`}>
      <Namaz counter = {count}/>
      <button onClick = {()=> setCount(++count)}>
        Update
      </button>

      <br/>
      <br/>

      <button onClick = {()=> setColor(!isColor)}>
        Change Color
      </button>
    </div>
  );
}

export default App;