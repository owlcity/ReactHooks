import React, { useState, Component, useMemo, memo, useCallback } from 'react';
import './App.css';



// function Counter (props) {
//   return (
//     <h1>{props.count}</h1>
//   )
// }
// memo
const Counter = memo(function Counter(props) {
   console.log('Counter render'); 
   return (
    <h1 onClick={props.onClick}>{props.count}</h1>
   )
})
function App (props) {
  const [count, setCount] = useState(0)
  const double = useMemo(() => {
    return count * 2
  }, [count === 3]) // 第二个参数类似于useEffect 第二个参数

  // const half = useMemo(() => {
  //   return count / 2
  // }, [double])
  // useMemo //渲染期间执行 
  // useEffect //执行副作用，所以在组件渲染后执行

  // const onClick = () => {
  //   console.log('click');
  // }
  // useMemo(() => fn) 等价于
  // useCallback(fn)
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click');
  //   }
  // }, [])
  const onClick = useCallback(() => {
    console.log('click');
  }, [double])
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>
        Click me {count}
        double {double}
      </button>

      <Counter count={double} onClick={onClick} />
    </div>
  )
}
export default App;
