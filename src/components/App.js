import React, { Component } from 'react'
import Board from './Board'
import Cell from './Cell'
class App extends Component {
  render () {
    return <div className="app-container">
      <Board />
    </div>
  }
}

export default App
