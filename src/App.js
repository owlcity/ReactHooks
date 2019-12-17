import React, { useState, Component, PureComponent, useMemo, memo, useRef, useCallback, useEffect } from 'react';
import './App.css';

// class Counter extends PureComponent {
//   render () {
//     const { props } = this
//     return (
//       <h1 onClick={props.onClick}>{props.count}</h1>
//     )
//   }
// }
// Counter 改为自定义hook
function useCounter(count) {
  const size = useSize()
  return (
    <h1>
      {count}
      width: {size.width}
      height: {size.height}
    </h1>
  )
}
// 自定义hooks函数
function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)
  let timer = useRef()
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (count >= 10) {
      clearInterval(timer.current)
    }
  })
  return [count, setCount]
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  return size
}

function App (props) {
  const [count, setCount] = useCount(0)
  const Counter = useCounter(count)
  const size = useSize()
  const a = () => {
    console.log('事件传递');
  }
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>
        Click me {count},
        <br />
        width: {size.width}
        height: {size.height}
      </button>
      {
        /**
         * <Counter count={count} onClick={a}  />
         */
      }
      { Counter }
    </div>
  )
}
export default App;
