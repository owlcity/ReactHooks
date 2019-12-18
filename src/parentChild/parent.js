import React from 'react'
import ChildCom from './child.js'
// 子组件向父组件传参，其实就是在父组件中给子组件添加一个属性，这个属性的内容为一个函数，然后在子组件中调用这个函数，即可达到传递参数的效果
class ParentCom extends React.Component {
 state = {
     getChildValue: ''
 }
 getChildValue(value) {
     this.setState({
         getChildValue: value
     })
 }
 render() {
 return (
 <div>
 <h1>父组件</h1>
 <div>子组件过来的值为：{this.state.getChildValue}</div>
 <ChildCom onValue={this.getChildValue.bind(this)}/>
 </div>
 )
 }
}
export default ParentCom;
