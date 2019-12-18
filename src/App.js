import React, { useState } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import TodoList from './todos'
// import Parent from './parentChild/parent'
import Counter from './redux'
import {increment, decrement, reset, INCREMENT, DECREMENT, RESET} from './redux/actions'

const initialState = {
  count: 0
}

function reducer (state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type){
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    case RESET:
      return {
        count: 0
      }
    default:
      return state;
  }
}
const store = createStore(reducer)


const App = () => (
   <Provider store={store}>
     <Counter />
   </Provider>
)

// export default TodoList;
export default App;
