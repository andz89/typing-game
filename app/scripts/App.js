import "../scss/main.scss";
import {Game_functions} from "./game_functions.js"

// DOM Elements
const wordInput = document.querySelector('#word-input');
const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');


wordInput.style.pointerEvents = 'none'
wordInput.style.backgroundColor = " rgb(216, 215, 215)"

//reset game
resetBtn.addEventListener("click", ()=>{
  Game_functions.restart()
})


//start game
startBtn.addEventListener("click", ()=>{
  startBtn.style.display = "none";
  
  Game_functions.startGame()

})
















