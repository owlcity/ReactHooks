import React, { lazy, Suspense, Component } from 'react';
import './App.css';
// lazy suspense
// https://zh-hans.reactjs.org/docs/code-splitting.html#error-boundaries

const AboutComponent = lazy(() => import(/*webpackChunkName:"about"*/'./About.js'))
// 1  函数形式
// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading</div>}>
//         <AboutComponent />
//       </Suspense>
//     </div>
//   );
// }
// 2 类
class App extends Component {
  state = {
    hasError: false
  }
  componentDidCatch () {
    this.setState({
      hasError: true
    })
  }
  render () {
    if (this.state.hasError) {
      return (
        <div>Error</div>
      )
    }
    return (
      <div>
          <Suspense fallback={<div>Loading</div>}>
            <AboutComponent />
          </Suspense>
      </div>
    )
  }
}
// 路由代码分割
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );

export default App;
