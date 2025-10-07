//Global Variables Here
const gameCards = document.querySelectorAll(".card") //this will choose all the cards

const emojis = ["🏰", "🦉", "🐍", "🦁", "🦅", "🦡", "🪄", "🧙"] //these are the emoji we will be using

const gameEmojis = [...emojis, ...emojis] //we are using spread operator to use the emojis 16 times

const resetButton = document.querySelectorAll(".restart") //this selects the restart element

const gameMoves = document.querySelector("#mov") // selects the moves element

const gameTime = document.querySelector("#time") // selects the time element
const winBox = document.getElementById("game-won") // this will select the game-won box

const gameOver = document.getElementById("game-over") // this will select the game-over box

// **********************************************************************************

// Game State variables
let cardBoard = [] //holds the two flipped cards
let matchedCards = [] //keep track of matched cards
let moves = 0 //moves will stay 0 until card clicked
let seconds = 0 // seconds are zero
let timeStarted = false // the initial state is false
let timer = 0 //holds setInterval
let gameEnded = false //the game is still not over
// **********************************************************************************
// shuffle the emojis using fisher-Yates algorithm
const shuffleEmojis = (array) => {
  const emojis = [...array] //using spread operator to create a copy to avoid mutating original copy
  for (let i = emojis.length - 1; i > 0; i--) {
    // starts from the last element
    const j = Math.floor(Math.random() * (i + 1)) //picks random index
    ;[emojis[i], emojis[j]] = [emojis[j], emojis[i]] //swaps the element with random index
  }
  return emojis //return the shuffled array of emojis
}
// **********************************************************************************
// assign the emojis
const assignEmojis = (shuffled) => {
  for (let i = 0; i < gameCards.length; i++) {
    //emojis will be assigned to the back of the card
    const back = gameCards[i].querySelector(".card-back")

    back.textContent = shuffled[i] //shuffled emojis will be displayed
  }
}
// startGame by shuffling the cards and assigning them
const shuffled = shuffleEmojis(gameEmojis)
assignEmojis(shuffled)
// // **********************************************************************************
//function to update the timer

// const timeUpdate = () => {
//   seconds++ //this will increase sec
//   gameTime.textContent = seconds //updates the time in the html

//   if (seconds >= 60) {
//     //if the time reaches one mint which is equal to 60 sec the game will stop and show time's up sign
//     clearInterval(timer) //this will stop the timer
//     gameEnded = true // mark game as ended

//     gameOver.classList.add("show") //display the game-over message
//   }
// }

// **********************************************************************************
// Event Handler
//calling click function for cards and adding event handler
// gameCards.forEach((card, i) =>
//   card.addEventListener("click", () => {
//     if (
//       gameEnded || //if game ended don't allow to click further
//       card.classList.contains("flipped") || //it won't allow to click already flipped cards
//       card.classList.contains("matched") || //it won't allow to click already matched cards
//       cardBoard.length === 2 // only 2 cards will be flipped at same time
//     ) {
//       return
//     }
//     // **************************************
//     // the timer didn't started yet
//     if (!timeStarted) {
//       //timer will start once clicked on the card
//       timeStarted = true
//       timer = setInterval(timeUpdate, 1000) //starts the timer
//     }
// ***************************************
//this increase with each click
// moves++
// gameMoves.innerHTML = moves //updates the moves display in html
// ***************************************
// matching the cards
// card.classList.add("flipped") //this will flip the clicked cards
// cardBoard.push(card) //pushes the card in the flipped card lists
// ***************************************
// if (cardBoard.length === 2) {
//   // when two cards will be clicked and flipped it will be stored in cardBoard
//   const [card1, card2] = cardBoard
//   const emoji1 = card1.querySelector(".card-back").innerText //get emoji from card 1
//   const emoji2 = card2.querySelector(".card-back").innerText //get emoji from card 2
// ***************************************
// if (emoji1 === emoji2) {
//   //if both card matched
//   card1.classList.add("matched") //mark card 1 as matched
//   card2.classList.add("matched") //mark card 2 as matched
//   matchedCards.push(card1, card2) // add to matched list
//   cardBoard = [] //clear the flipped cards
// ***************************************
// if (matchedCards.length === gameCards.length) {
//   //if all the cards matched
//   clearInterval(timer) //stop the timer
//   gameEnded = true //end the game
//   setTimeout(() => {
//     const winMes = winBox.querySelector("h4")
//     winMes.textContent = `🎉 You Won in ${moves} moves!`
//     winBox.classList.add("show") //show win message after delay of 5ms
//   }, 500)
// }
//       } else {
//         //if cards don't matched flip the cards back
//         setTimeout(() => {
//           card1.classList.remove("flipped")
//           card2.classList.remove("flipped")
//           cardBoard = [] // clear cardBoard list storing the flipped cards
//         }, 1000) //delay before flipping back is 1 sec
//       }
//     }
//   })
// )
// ******************************************************************************
//calling click function for the reset
// resetButton.forEach((reset, i) =>
//   reset.addEventListener("click", () => {
//     moves = 0 //reset moves
//     seconds = 0 //reset seconds
//     timeStarted = false //reset the timer flag
//     clearInterval(timer) //stop running timer
//     cardBoard = [] //clear the flipped cards
//     matchedCards = [] //clear the matched cards
//     gameEnded = false //reset game status

//     gameMoves.textContent = moves //reset the moves in my html
//     gameTime.textContent = seconds //reset the moves in my html
//     //this will hide the game-over and game-won box and ensure it back to hidden
//     document.getElementById("game-over").classList.remove("show")
//     document.getElementById("game-over").classList.add("hidden")
//     document.getElementById("game-won").classList.remove("show")
//     document.getElementById("game-won").classList.add("hidden")

//     gameCards.forEach((card) => {
//       card.classList.remove("flipped", "matched") // reset the cards visual state
//     })
//     const shuffled = shuffleEmojis(gameEmojis) //reshuffle emojis again for the new game
//     assignEmojis(shuffled) //reassign the emojis to cards
//   })
// )
//
// ***************************************************************************8
