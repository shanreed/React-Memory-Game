import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';

import { checkersFull, cardAlreadyInCheckers, validateCheckers } from './boardUtils';
import MatchCard from '../matchCard/matchCard'
import './board.css'

const Board = props => {
  const [cards, setCards] = useState(props.cards)

  //Need an array to hold the matched cards and the cards 
  //that have been clicked to be checked to see if they are a match
  const [compareCards, setCompareCards] = useState([])//array to store two cards to compare
  const [matchedCards, setMatchedCards] = useState([])//array to store the cards that have been matched


  
  const onCardClick = card => () => {
    if (checkersFull(compareCards) || cardAlreadyInCheckers(compareCards, card)) return
    const newCheckers = [...compareCards, card]
    setCompareCards(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setMatchedCards([...matchedCards, newCheckers[0].name])
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }

    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCompareCards([])
      }, time)
    }
  }

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        compareCards.find(c => c.id === card.id) ||
        matchedCards.includes(card.name),
    }))
    setCards(newCards)
  }, [compareCards, matchedCards])

  return (
    <div className="board">
      <Card className = 'board-card'>
      {cards.map(card => (
        <MatchCard {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
      </Card>
    </div>
  )
}

export default Board
