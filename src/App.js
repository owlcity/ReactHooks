import React, { useState, useEffect, Component } from 'react';
import './App.css';

// hooks 出现之前 类组件不足
// 1 缺少复用机制，状态逻辑难以复用
  // 渲染属性和高阶组件导致层级冗余
// 2 相关逻辑复杂难以维护
// 3 this 指向困扰
// hooks优势
// 1 函数组件无this问题
// 2 自定义hook方便复用状态逻辑
// 3 副作用的关注点分离

// npm i -D eslint-plugin-react-hooks
// 配置 package.json
/**
 * { eslintConfig:{
 *   "plugins": [react-hooks]
 *   "react-hooks": {
 *     "react-hooks/rules-of-hooks": "error"
 *   }
 * }}
 */
class App2 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
  // 用类属性声明，可以保证this的正确指向
  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    })
  }

  componentDidMount(){
    document.title = this.state.count
    window.addEventListener('resize', this.onResize, false)
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.onResize, false)
  }
  componentDidUpdate(){
    document.title = this.state.count
  }
  render () {
    const { count, size } = this.state
    return (
      <button onClick={() => {this.setState({count: count + 1})}}>
        Click Me { count }
        size: {size.width} * {size.height}
      </button>
    )
  }
}

function App (props) {
  // useState可以传入一个参数，延时初始化默认值
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(() => {
    console.log("initial count");
    return props.defaultCount || 0
  })

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  useEffect(() => {
    document.title = count
  })

  // useEffect 文档
  // http://react.html.cn/docs/hooks-effect.html
  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    
    // return 一个回调函数，一在组件卸载时候调用二在组件重新宣软是调用
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])
  // useEffect第二个参数，传入空数组相当于 第一次渲染为空数组，第二次还是空数组，两者相等所以第二次不执行，整个useEffect 只执行一次
  // 在某些情况下，在每次渲染后清理或应用 effect可能会产生性能问题。在类组件中，我们可以通过在componentDidUpdate 中编写与 prevProps 或 prevState 的额外比较来解决这个问， 
  // 例如
  useEffect(() => {
    console.log('count:'+count);
  }, [count])

  // 在dom元素上绑定事件
  const click = () => {
    console.log('click');
  }
  useEffect(() => {
    document.querySelector('.size').addEventListener("click", click, false)
  }, [])

  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>
        Click me {count}
      </button>
      <p className="size">size: {size.width} * {size.height}</p>
    </div>
  )
}
export default App;
