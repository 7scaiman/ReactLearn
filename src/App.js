import React, { useState } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
function App() {
  
  const [value,setValue] = useState("Hello World")
  function changeValue(e){
    console.log(e)
    setValue(e.currentTarget.value)
  }
   
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <ClassCounter/>
    </div>
  );
}

export default App;
