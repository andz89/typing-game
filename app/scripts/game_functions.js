import {words} from "./words.js"



//start signal time
let timeSignal = 5;

// Available Levels
const levels = {
  easy:5,
  medium: 3,
  hard: 2
};

// To change level
const currentLevel = levels.easy;

//Global variables
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const resetBtn = document.querySelector('#reset-btn')
const divTime = document.querySelector('.div-time')
const divScore = document.querySelector('.div-score')

const startSignal = document.querySelector("#start-signal")

export class Game_functions {

//Initialize Game
      static init() {
       
        //show number of seconds in UI
        seconds.innerHTML = currentLevel;

        // Load word from array
        Game_functions.showWord(words);

        //start matching on word input
        wordInput.addEventListener('input', Game_functions.startMatch)

        //call countdown every second
        setInterval(Game_functions.countdown, 1000)

        // check game status
        setInterval(Game_functions.checkStatus, 50)
        
      
      }


      //start match
      static startMatch(){

      if(Game_functions.matchWords()){

      isPlaying = true;
      time = currentLevel + 1;
      Game_functions.showWord(words)
      wordInput.value = ''
      score++
      }
      scoreDisplay.innerHTML = score
      }
  
      //match current word to word input
      static matchWords(){
      if(wordInput.value === currentWord.innerHTML){
        message.style.display = "block"
      message.innerHTML = "correct"
      
      setTimeout(()=>{
        message.style.display = "none"
      }, 1000)
      return true
      }else{
      message.innerHTML = ""
      return false
      }
      }

    // Pick & show random word
    static showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
    }

    //countdown timer
    static countdown() {

    //make sure the is not run out
    if(time > 0){
    
    //decrement
    time--;

    }else if(time === 0){
    isPlaying = false
  
    }
    //show time
    timeDisplay.innerHTML = time
    }


    //check status
    static checkStatus(){
      if(!isPlaying && time === 0){
    
        Game_functions.gameOver()
      }
    }
    


    //play Again game
    static restart(){

      isPlaying = true;
      time = currentLevel + 1;
   
      setTimeout(()=>{
        startSignal.style.display = "block";
      },1000)
      timeSignal = 6;
 
      currentWord.innerHTML = "Typing Game"
      wordInput.value ="";

      divTime.style.display = "none";
      divScore.style.display = "none";
      resetBtn.style.display = "none";
 
      setTimeout(()=>{
      
        isPlaying = true;
        time = currentLevel + 1;
        time--;
        Game_functions.showWord(words);
      
        divTime.style.display = "block"
        divScore.style.display = "block"
        startSignal.style.display = "none"
        message.innerHTML = "";
        wordInput.focus()
        wordInput.style.pointerEvents= "auto";
        wordInput.style.backgroundColor = "#fff";
        wordInput.value = "";
        score = 0;
        scoreDisplay.innerHTML = score;
    
      },5200)
 
  }
  
      //start game  mode function
      static  startGame(){
      
      startSignal.style.display = "block";
      setInterval(Game_functions.countdownSignal, 1000);
        
      
      setTimeout(()=>{
      divTime.style.display = "block";
      divScore.style.display = "block";
      Game_functions.init();
      wordInput.focus();
      wordInput.style.backgroundColor = "#fff";
      wordInput.style.pointerEvents= "auto";
      wordInput.style.display = "block";
      startSignal.style.display = "none";
      },5000)
  
      }


      //gameover  mode function
      static gameOver(){

      currentWord.innerHTML = "Game Over";
      wordInput.style.pointerEvents = "none";
      wordInput.style.backgroundColor = " rgb(216, 215, 215)";
      wordInput.blur();
      resetBtn.style.display = "inline-block";
      timeSignal = 6;
      }
    //start signal  //countdown timer
    static countdownSignal() {

      if(timeSignal > 0){
        //decrement
        timeSignal--;
        }
      //show time
      startSignal.innerHTML = timeSignal
      }

}