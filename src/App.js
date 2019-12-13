import React, { useState, createContext, useContext } from 'react';
import './App.css';
import Leaf from './Leaf'

export const NumContext = createContext({num: 0})

// class Leaf extends React.Component {
//   static contextType = NumContext
//   render(){
//     console.log(this);
//     return (
//       <h1>name: {this.context.num}</h1>
//     )
//   }
// }
// function Leaf () {
//   const { num } = useContext(NumContext)
//   return (
//     <h1>{num}</h1>
//   )
// }
function Middle() {
  return (
    <Leaf />
  )
}
function App() {
  // const [num, setNum] = useState(1)
  // function addBtn () {
  //   return setNum(num + 1)
  // }
  return (
    <NumContext.Provider value={{
      num: 2
    }}>
      <button>按钮</button>
      <Middle />
    </NumContext.Provider>
  );
}

export default App;
