import React from 'react';
import './App.css';
import Additems from './Components/Additems';

function App() {

  return (
    <div className='con'>
      <div className="todo">
        <h1 className='todohead'>ToDo App</h1>
        <Additems />

      </div>
    </div>
  );
}

export default App;
