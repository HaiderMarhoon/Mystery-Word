/*-------------- Constants -------------*/
const categories = {
    name: ["Ali", "Jony", "Sara", "Salman", "James", "Robby"],
    animal: ["cat", "lion", "Eel", "Zebra", "Mouse", "Oilfish", "Raccoon"],
    country: ["Angola", "Bahrain", "Burundi", "Comoros", "Finland", "Haiti"]
}; 

/*---------- Variables (state) ---------*/
let ComputerChoice
let catogary
let playerChoice
let ComputerSelect
let guessedLetters = [];
let wrongGuesses = 0;
let maxGuesses = 8;


/*----- Cached Element References  -----*/
const namesBntElement = document.querySelector("#name")
const animalsBntElement = document.querySelector("#animal")
const countriesBntElement = document.querySelector("#country")
const messageEl = document.querySelector("#message");
const messageofEl = document.querySelector("#messageofwrong");
const wordDisplay = document.querySelector("#wordDisplay");
const letterbuttons = document.querySelector("#letter-buttons")
const gallows=document.querySelectorAll("#gallows")
/*-------------- Functions -------------*/

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * ComputerSelect.length);
    console.log('test=  ' + randomIndex)
    ComputerChoice = ComputerSelect[randomIndex]
    return ComputerChoice
    
}
function catogarySelect(event) {
    playerChoice = event.target.id;
    if(categories[playerChoice] == false){
        console.log("error")
        return
    }
    else{
        ComputerSelect = categories[playerChoice]
        console.log(ComputerSelect)
        getComputerChoice()

    }
    
}
function updateDisplay(){
    const display = ComputerChoice.spilt("").map(letter => guessedLetters.includes(letter) ? letter :(_))
    messageofEl.textContant =`${wrongGuesses} / ${maxGuesses}`
    if(!display.includes("_")){
        messageEl.textContent = "You win!"
    }
    else if(wrongGuesses <= maxGuesses){
        messageEl.textContent =`You lose `;
        wordDisplay.textContent = `${wordDisplay}`;

    }

}

function renderAlphabet(){
    for(let i=97; i<=122; i++){
        const letter = String.fromCharCode(i)
        letterbuttons.textContent = letter
        letterbuttons.disabled=guessedLetters.includes(letter);
        letterbuttons.onclick =() => guessedLetters(letter);
    }
}

function getwrong(letter){
    if(display.includes("_")){
        
    }
}





function init(){
    guessedLetters=[];
    wrongGuesses = 0;

}


/*----------- Event Listeners ----------*/
namesBntElement.addEventListener('click',catogarySelect )
animalsBntElement.addEventListener('click',catogarySelect )
countriesBntElement.addEventListener('click',catogarySelect )