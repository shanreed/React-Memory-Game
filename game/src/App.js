import React, {useState} from 'react'
import Board from './components/board/board'
import backImg from './img/back.png'
import mail from './img/mail.jpg'
import dementors from './img/dementors.jpg'
import room from './img/room.jpg'
import wands from './img/wands.jpg'
import hall from './img/hall.jpg'
import car from './img/car.jpg'
import hat from './img/hat.jpg'
import alley from './img/alley.jpg'

import './App.css';

function App() {

  const makeCards = () => {
    let id = 0
    const images = {mail, room, hall, car, alley, wands, hat, dementors}
    const cards = Object.keys(images).reduce((result, item) => {
      const getCard = () => ({
        id: id++,
        type: item,
        backImg,
        frontImg: images[item],
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return suffle(cards)
  }
  
  const suffle = (arr) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      let randomIdx = Math.floor(Math.random() * len)
      let copyCurrent = {...arr[i]}
      let copyRandom = {...arr[randomIdx]}
      arr[i] = copyRandom
      arr[randomIdx] = copyCurrent
    }
    return arr
  }


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

