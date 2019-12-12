import React, { useState, createContext } from 'react';
import './App.css';

const AppContext = createContext({})
function Leaf () {
  return (
    <AppContext.Consumer>
      {
        data => <h1>name: {data.num}</h1>
      }
    </AppContext.Consumer>
  )
}
function Middle() {
  return (
    <Leaf />
  )
}
function App() {
  const [num, setNum] = useState(1)
  function addBtn () {
    return setNum(num + 1)
  }
  return (
    <AppContext.Provider value={{
      num: num
    }}>
      <button onClick={addBtn}>按钮</button>
      <Middle />
    </AppContext.Provider>
  );
}

export default App;
