import React from 'react'
import './matchCard.css'

const MatchCard = props => {
  const {frontImg, backImg, flipped, onClick} = props
  const img = flipped ? frontImg : backImg
  return (
    <div className="match-card" onClick={onClick}>
      <img className = 'match-card-pic' src={img} alt=""/>
    </div>
  )
}

export default MatchCard