# React-Memory-Game
[See React Memory Game In Action](https://react-memory-game-wheat.vercel.app/)
- [x] Create a Match Game
- [ ] Add timer
- [ ] Add the ability to turn cards back over and shuffle whne game is come plete
- [ ] Add the ability to have the game timed



Match Card Game with 20 cards, 10 differnt cards each card has a match making it 20 cards total 
#### Concepts
- React
- Hooks
- React-Bootstrap
- Arrays
 - length
 - reduce
 - Math.floor
 - Math.random
 - Pure Functions

# Each Card has the following
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


 *Getting an error: `React Hook useEffect has a missing dependency: 'cards'. Either include it or remove the dependency array,` but when I include cards the app stops working*
