import React, { useState, Component } from 'react';


class App extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
    console.log('pre state', this.state.count);
    this.setState({
      count: this.state.count + 1
    });
    console.log('next state', this.state.count);

    //测试setTimeout
    setTimeout(() => {
      console.log('setTimeout pre state', this.state.count);
      this.setState({
        count: this.state.count + 1
      });
      console.log('setTimeout next state', this.state.count);
    }, 0);

  }
  onClick = (event) => {
    // 测试合成函数中setState
    console.log(event);
    console.log(`${event.type} pre state`, this.state.count);
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);
    });
    console.log(`${event.type} next state`, this.state.count);
  }

  render () {
    return (
      <button onClick={this.onClick}>count+1</button>
    )
  }
}

// export default TodoList;
export default App;
