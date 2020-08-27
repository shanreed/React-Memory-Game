# React-Memory-Game
[x] Create a Match Game
[ ] Add timer


Match Card Game with 20 cards, 10 differnt cards each card has a match making it 20 cards total 
####[Concepts](https://medium.com/@cqpro/lets-build-a-matching-card-game-with-react-d8923d915e46)
- React
- Hooks
- React-Bootstrap
- Arrays
 - length
 - reduce
 - Math.floor(Math.random())
- [Pure Functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

#Each Card has the folowing
- way to check to see if two cards clicked match
- id/unique
- when card is not clicked state/action/img
- when card clicked state/action/img
- boolean value to check if card is clicked or not

## Logic
- When one card is clicked just turn it over
- when two cards are clicked, check to see if they match
    - if they match they leave them clicked/open
    - if they do not match turn them back over
- Each card has a match, both will have the same type but different ids
