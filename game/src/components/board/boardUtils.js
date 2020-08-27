export const checkersFull = (compareCards) => {
    return compareCards.length === 2
  }

export const cardAlreadyInCheckers = (compareCards, card) => {
    return compareCards.length === 1 && compareCards[0].id === card.id
  }

export const validateCheckers = (compareCards) => {
    return compareCards.length === 2 &&
    compareCards[0].name === compareCards[1].name
  }