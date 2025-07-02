
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

let user = {
    name: "User1",
    email: "user1@gmail.com",
    wins: 0,
    loss: 0,
    num: 0,
    cato: "",
    pestent: 0
};


/*----- Cached Element References  -----*/
const namesBntElement = document.querySelector("#name")
const animalsBntElement = document.querySelector("#animal")
const countriesBntElement = document.querySelector("#country")
const messageEl = document.querySelector("#message");
const messageofEl = document.querySelector("#messageofwrong");
const wordDisplayEl = document.querySelector("#wordDisplay");
const letterbuttons = document.querySelector("#letter-buttons")
const categorySelectEl = document.querySelector("#categorySelect")
const newGameBtn = document.querySelector("#End");
const username = document.querySelector("#currentUserNameStats")
const numWin = document.querySelector("#statsWins")
const numLose = document.querySelector("#statsLose")
const numofgame = document.querySelector("#statsGamesPlayer")
const pers = document.querySelector("#statpersant")
const cleanEl = document.querySelector("#cleanState")

const hangmanParts = [];
for (let i = 1; i <= maxGuesses; i++) {
    hangmanParts.push(document.querySelector(`#image${i}`));
}

/*-------------- Functions -------------*/
/*---------------index-----------------*/
function getComputerChoice() {
    if (!playerChoice || !categories[playerChoice]) {
        console.error("No category selected or invalid category.");
        return;
    }
    categorySelectEl.textContent = playerChoice
    ComputerSelect = categories[playerChoice]
    const randomIndex = Math.floor(Math.random() * ComputerSelect.length);
    ComputerChoice = ComputerSelect[randomIndex].toLowerCase();
    guessedLetters = []
    wrongGuesses = 0;

    hangmanParts.forEach(part => {
        if (part) {
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
function updateDisplay() {
    if (!ComputerChoice) {
        wordDisplayEl.textContent = "Select a category to start";
        messageEl.textContent = "";
        messageofEl.textContent = "";
        return;
    }
    const display = ComputerChoice.split("").map(letter => {
        return guessedLetters.includes(letter) ? letter : "_"
    }).join(" ");
    wordDisplayEl.textContent = display;
    messageofEl.textContent = `Wrong guesses: ${wrongGuesses} / ${maxGuesses}`;
    if (!display.includes("_")) {
        messageEl.textContent = "🏆You win!";
        disableLetterButton();
        user.wins++;
        user.num++;

    }
    else if (wrongGuesses >= maxGuesses) {
        messageEl.textContent = `😔You lose the word was "${ComputerChoice}"`;
        disableLetterButton();
        showAllHangmanParts();
        user.loss++;
        user.num++;
    }
    else {
        messageEl.textContent = "";
    }

    for (let i = 0; i < hangmanParts.length; i++) {
        if (hangmanParts[i]) {
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
        btn.onclick = () => guessLatter(letter);
        letterbuttons.appendChild(btn);
    }
}

function guessLatter(letter) {
    if (guessedLetters.includes(letter) || wrongGuesses >= maxGuesses || !ComputerChoice) {
        return
    }

    guessedLetters.push(letter);

    if (!ComputerChoice.includes(letter)) {
        wrongGuesses++;
    }
    updateDisplay();
    renderAlphabet();
}

function disableLetterButton() {
    const buttons = letterbuttons.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function showAllHangmanParts() {
    hangmanParts.forEach(part => {
        if (part) { part.style.display = 'block'; }
    });
}

function start() {
    guessedLetters = [];
    wrongGuesses = 0;
    ComputerChoice = null;
    playerChoice = null;

    messageEl.textContent = "";
    messageofEl.textContent = "";
    wordDisplayEl.textContent = "";

    renderAlphabet()
}

function updateStats() {
    user.pestent = (user.wins / user.num) * 100
    numWin.textContent = user.wins;
    numLose.textContent = user.loss;
    numofgame.textContent = user.num;
    pers.textContent = user.pestent;
    username.textContent = user.name;
}


/*----------- Event Listeners ----------*/

const currentPath = window.location.pathname;

if (currentPath.includes('index.html') || currentPath === '/') {
    if (namesBntElement) namesBntElement.addEventListener('click', catogarySelect)
    if (animalsBntElement) animalsBntElement.addEventListener('click', catogarySelect)
    if (countriesBntElement) countriesBntElement.addEventListener('click', catogarySelect)
    if (newGameBtn) newGameBtn.addEventListener('click', start)
    start();
} else if (currentPath.includes('stats.html')) {
    if (cleanEl) {
        cleanEl.addEventListener('click', () => {
            numWin.textContent = null;
            numLose.textContent = null;
            numofgame.textContent = null;
            pers.textContent = null;
            username.textContent = null;
        });
    }
    updateStats();
}
