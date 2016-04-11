import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MyComponent from '../src/index'

export default class App extends Component {
  render() {
    return (
      <MyComponent></MyComponent>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
