import React, {useState} from 'react'

import { makeCards } from './utils'

import Board from './components/board/board'

import './App.css';

function App() {
  const cards = makeCards()
  return (
    <div className="App">
       <h1>React Match Game</h1>
      <p>Click the cards and see how many matches you can find</p>
      <div className = ''>
      <Board cards={cards} />
      </div>
    </div>
  )
}

export default App

