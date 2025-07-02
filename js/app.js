

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
const maxGuesses = 8;


/*----- Cached Element References  -----*/
const namesBntElement = document.querySelector("#name")
const animalsBntElement = document.querySelector("#animal")
const countriesBntElement = document.querySelector("#country")
const messageEl = document.querySelector("#message");
const messageofEl = document.querySelector("#messageofwrong");
const wordDisplayEl = document.querySelector("#wordDisplay");
const letterbuttons = document.querySelector("#letter-buttons")
const newGameBtn = document.querySelector(".btn-primery");

const hangmanParts =[];
for(let i =1; i <= maxGuesses; i++){
    hangmanParts.push(document.querySelector(`#image${i}`));
}

/*-------------- Functions -------------*/

function getComputerChoice() {
    if (!playerChoice || !categories[playerChoice]) {
        console.error("No category selected or invalid category.");
        return; 
    }

    ComputerSelect = categories[playerChoice]
    const randomIndex = Math.floor(Math.random() * ComputerSelect.length);
    ComputerChoice = ComputerSelect[randomIndex].toLowerCase();
    guessedLetters = []
    wrongGuesses = 0;

    hangmanParts.forEach(part =>{
        if(part){
            part.style.display = "none";
        }
    })
   
    updateDisplay()
    renderAlphabet()

}
function catogarySelect(event) {
    playerChoice = event.target.id;
    getComputerChoice(); 
}
function updateDisplay(){
    if(!ComputerChoice){
        wordDisplayEl.textContent="Select a category to start";
        messageEl.textContent="";
        messageofEl.textContent= "";
        return;
    }
    const display = ComputerChoice.split("").map(letter => {
       return guessedLetters.includes(letter) ? letter :"_"}).join(" ");
    wordDisplayEl.textContent = display;
    messageofEl.textContent = `Wrong guesses: ${wrongGuesses} / ${maxGuesses}`;
    if(!display.includes("_")){
        messageEl.textContent = "🏆You win!";
        disableLetterButton();
    }
    else if(wrongGuesses >= maxGuesses){
       messageEl.textContent =`😔You lose the word was "${ComputerChoice}"`;
       disableLetterButton();
       showAllHangmanParts();
    }
    else{
        messageEl.textContent="";
    }

    for(let i =0; i<hangmanParts.length; i++){
        if(hangmanParts[i]){
            hangmanParts[i].style.display = (i < wrongGuesses) ? 'block' : 'none';
        }
    }
}

 function renderAlphabet() {
      letterbuttons.innerHTML = "";
      for (let i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        const btn = document.createElement("button");
        btn.textContent = letter.toUpperCase();
        btn.classList.add("btn", "btn-outline-primary", "m-1");
        btn.disabled = guessedLetters.includes(letter);
        btn.onclick = () =>guessLatter(letter);
        letterbuttons.appendChild(btn);
      }
    }

function guessLatter(letter){
    if(guessedLetters.includes(letter) || wrongGuesses >= maxGuesses || !ComputerChoice){
        return
    }

    guessedLetters.push(letter);

    if(!ComputerChoice.includes(letter)){
        wrongGuesses++;
    }
    updateDisplay();
    renderAlphabet();
}

function disableLetterButton(){
    const buttons = letterbuttons.querySelectorAll("button");
    buttons.forEach(button =>{
        button.disabled = true;
    })
}

function showAllHangmanParts() {
    hangmanParts.forEach(part => {
        if (part) 
            {part.style.display = 'block';}
    });
}

function start(){
    guessedLetters=[];
    wrongGuesses = 0;
    ComputerChoice = null;
    playerChoice = null;

    hangmanParts.forEach(part =>{
        if(part){
            hangmanParts.style.display = "none";
        }
    })
    messageEl.textContent="";
    messageofEl.textContent = "";
    wordDisplayEl.textContent = "";

    renderAlphabet()
}


/*----------- Event Listeners ----------*/
namesBntElement.addEventListener('click',catogarySelect )
animalsBntElement.addEventListener('click',catogarySelect )
countriesBntElement.addEventListener('click',catogarySelect )
newGameBtn.addEventListener('click', start)

start()