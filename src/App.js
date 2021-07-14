import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello"
function App() {
  return (
    <div>      
      <header className="App-header" > จงเรียงคำให้ถูกต้อง 
        <WordCard value="Hello"/> 
          <button class="button" onClick="window.location.reload();"> Reset </button>
      </header>   
                           
    </div>
  );
}

export default App;
