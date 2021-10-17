import React from 'react';
import Namaz from './namaz.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Namaz ftime = '5:20 AM' ztime = '1:00 PM' atime = '3:45 PM' mtime = '5:40 PM' itime = '7:45 PM'/>
    </div>
  );
}

export default App;