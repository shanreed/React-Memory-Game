import React, {useState} from 'react'
import Board from './components/board/board'
import cardBack from './img/cardBack.jpg'
import mail from './img/mail.jpg'
import dementors from './img/dementors.jpg'
import room from './img/room.jpg'
import wands from './img/wands.jpg'
import magic from './img/magic.jpg'
import train from './img/train.jpg'
import hall from './img/hall.jpg'
import car from './img/car.jpg'
import hat from './img/hat.jpg'
import alley from './img/alley.jpg'

import './App.css';

function App() {

  const makeCards = () => {
    let id = 0
    const images = {magic, train, mail, room, hall, car, alley, wands, hat, dementors}
    //for each image use the key to create 2 cards to get 20 cards
    const cards = Object.keys(images).reduce((result, img) => {//reduce each key to a single value
      const createCard = () => ({
        id: id++, //generates a unique id for each card
        name: img,
        cardBack,
        frontImg: images[img],
        flipped: false,//set to false so the card will close when not matched
      })
      return [...result, createCard(), createCard()]//createCard is call twice to create two cards from each image
    }, [])
    return shuffle(cards)
  }
  

  const shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let randomIdx = Math.floor(Math.random() * arr.length)//getting a ramdon index from the array
      let notRandomCopy = {...arr[i]}// not random array
      let randomCopy = {...arr[randomIdx]} // random array
      arr[i] = randomCopy//setting the random array 
      arr[randomIdx] = notRandomCopy
    }
    return arr
    //should get back an array of indices randomly
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

