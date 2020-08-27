import React from 'react'
import './matchCard.css'

const MatchCard = props => {
  const {frontImg, cardBack, flipped, onClick} = props
  const img = flipped ? frontImg : cardBack
  return (
    <div className="match-card" onClick={onClick}>
      <img className = 'match-card-pic' src={img} alt=""/>
    </div>
  )
}

export default MatchCard