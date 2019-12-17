import React, { useState, Component, PureComponent, useMemo, memo, useRef, useCallback, useEffect } from 'react';
import './App.css';

// useRef
// 1 获取子组件或者DOM节点的句柄
// 2 渲染周期之间共享数据的存储

// function Counter (props) {
//   return (
//     <h1>{props.count}</h1>
//   )
// }
// memo
// const Counter = memo(function Counter(props) {
//    console.log('Counter render'); 
//    return (
//     <h1 onClick={props.onClick}>{props.count}</h1>
//    )
// })
class Counter extends PureComponent {
  speak () {
    console.log('ref 获取组件扩展dom元素使用场景');
  }
  render () {
    const { props } = this
    return (
      <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

function App (props) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  // useRef 两种使用方式
  // 1 获取子组件扩展dom元素
  // 2 同步获取不同渲染周期需要共享的数据
  let timer = useRef()

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
    // console.log(countRef); // 报错 Function components cannot be given refs
    // 可以看出函数组件不能完全替代类组件，函数组件不能被实例化，所以在这里需要把Couter组件改为类组件    
    console.log(countRef.current);
    countRef.current.speak()
  }, [countRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 100)
  }, [])

  useEffect(() => {
    if (count >= 10) {
      clearInterval(timer.current)
    }
  })

  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>
        Click me {count}
        double {double}
      </button>

      <Counter ref={countRef} count={double} onClick={onClick} />
    </div>
  )
}
export default App;
