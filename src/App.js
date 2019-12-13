import React, {  Component, PureComponent, memo } from 'react';
import './App.css';

// memo文档
// https://zh-hans.reactjs.org/docs/react-api.html#reactmemo
// React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。你也可以考虑使用 immutable 对象加速嵌套数据的比较

// class Foo extends PureComponent {
//   // shouldComponentUpdate (nextProps, nextState) {
//   //   if (nextProps.name === this.props.name) {
//   //     return false
//   //   }
//   //   return true
//   // }

//   // 无状态组件
//   // PureComponent 只有props 的第一级发生变化才会更新
//   render () {
//     console.log("foo render");
//     return (
//       <div>
//           {this.props.person.age}
//       </div>
//     )
//   }
// }
const Foo = memo(function Foo (props) {
  console.log("Foo render");
  return (
      <div>
          {props.person.age}
      </div>
    )
})

class App extends Component {
  state = {
    count: 1,
    person: {
      age: 1
    }
  }
  callback = () => {

  }
  render () {
    const { count, person } = this.state
    return (
      <div>
          <button onClick={() => {
            person.age++
            this.setState({count: count + 1})}
          }>按钮</button>
          <Foo person={person} cb={ this.callback }/>
          <div>{this.state.person.age}</div>
      </div>
    )
  }
}
export default App;
