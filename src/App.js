import React from 'react'
import './App.css'
import Background from './components/Background';
import Sudoku from './containers/Sudoku';

function App() {
  return (
    <div className="App">
      <Background />
      <Sudoku />
    </div>
  )
}

export default App
