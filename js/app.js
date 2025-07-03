
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
    name: "Guest",
    email: "guest@example.com",
    wins: 0,
    loss: 0,
    num: 0,
    pestent: 0
};

let currentMysteryWordUserEmail = null;

/*----- Cached Element References  -----*/
const namesBntElement = document.querySelector("#name")
const animalsBntElement = document.querySelector("#animal")
const countriesBntElement = document.querySelector("#country")
const messageEl = document.querySelector("#message");
const usernameDisplayEl = document.querySelector("#usernameDisplay")
const messageofEl = document.querySelector("#messageofwrong");
const wordDisplayEl = document.querySelector("#wordDisplay");
const letterbuttons = document.querySelector("#letter-buttons")
const categorySelectEl = document.querySelector("#categorySelect")
const newGameBtn = document.querySelector("#End");
const username = document.querySelector("#currentUserNameStats")
const numWin = document.querySelector("#statsWins")
const numLose = document.querySelector("#statsLoss")
const numofgame = document.querySelector("#statsGamesPlayer")
const pers = document.querySelector("#statpersant")
const cleanEl = document.querySelector("#cleanState")
const inputuserEl = document.querySelector("#inputuser")
const inputemailEl = document.querySelector("#inputemail")
const addEl = document.querySelector("#add")
const loginForm = document.querySelector("#form form");

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
        saveUserData();

    }
    else if (wrongGuesses >= maxGuesses) {
        messageEl.textContent = `😔You lose the word was "${ComputerChoice}"`;
        disableLetterButton();
        showAllHangmanParts();
        user.loss++;
        user.num++;
        saveUserData();
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
    usernameDisplayEl.textContent = user.name;
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
    loadUserData();
    console.log("Updating stats with user data:", user);
    user.pestent = user.num > 0 ? ((user.wins / user.num) * 100).toFixed(2) : 0;
    numWin.textContent = user.wins;
    numLose.textContent = user.loss;
    numofgame.textContent = user.num;
    pers.textContent = `${user.pestent}%`;
    username.textContent = user.name;
}

/*-------------- Functions -------------*/

// Function to load all user data and set the active user
function loadUserData() {
    const allUsersString = localStorage.getItem('allMysteryWordUsers');
    const currentUserEmailString = localStorage.getItem('currentMysteryWordUserEmail');

    let allUsers = {};
    if (allUsersString) {
        allUsers = JSON.parse(allUsersString);
    }

    if (currentUserEmailString && allUsers[currentUserEmailString]) {
        currentMysteryWordUserEmail = currentUserEmailString;
        user = allUsers[currentMysteryWordUserEmail];
    } else {
        user = {
            name: "Guest",
            email: "guest@example.com",
            wins: 0,
            loss: 0,
            num: 0,
            pestent: 0
        };
        currentMysteryWordUserEmail = null;
        localStorage.removeItem('currentMysteryWordUserEmail');
    }
}


function saveUserData() {
    const allUsersString = localStorage.getItem('allMysteryWordUsers');
    let allUsers = {};
    if (allUsersString) {
        allUsers = JSON.parse(allUsersString);
    }

    if (currentMysteryWordUserEmail) {
        allUsers[currentMysteryWordUserEmail] = user;
    } else {
        allUsers[user.email] = user;
        currentMysteryWordUserEmail = user.email;
        localStorage.setItem('currentMysteryWordUserEmail', currentMysteryWordUserEmail);
    }
    localStorage.setItem('allMysteryWordUsers', JSON.stringify(allUsers));
}
/*---------------login.html functions-----------------*/
function initLoginPage() {
    loadUserData();

    if (inputuserEl && user.name !== "Guest") {
        inputuserEl.value = user.name;
    }
    if (inputemailEl && user.email !== "guest@example.com") {
        inputemailEl.value = user.email;
    }

    if (addEl) {
        addEl.addEventListener('submit', handleLoginSubmit);
    }
}

function handleLoginSubmit(event) {
    event.preventDefault();
    if (inputuserEl && inputemailEl) {
        const enteredName = inputuserEl.value.trim();
        const enteredEmail = inputemailEl.value.trim().toLowerCase();
        if (!enteredEmail) {
            alert("Please enter an email address.");
            return;
        }

        const allUsersString = localStorage.getItem('allMysteryWordUsers');
        let allUsers = {};
        if (allUsersString) {
            allUsers = JSON.parse(allUsersString);
        }

        if (allUsers[enteredEmail]) {
            user = allUsers[enteredEmail];
            user.name = enteredName || user.name;
            alert(`Welcome back, ${user.name}!`);
        } else {
            user = {
                name: enteredName || "New Player",
                email: enteredEmail,
                wins: 0,
                loss: 0,
                num: 0,
                pestent: 0
            };
            alert(`Welcome, ${user.name}! Your new profile has been created.`);
        }

        currentMysteryWordUserEmail = enteredEmail;
        localStorage.setItem('currentMysteryWordUserEmail', currentMysteryWordUserEmail);

        allUsers[currentMysteryWordUserEmail] = user;
        localStorage.setItem('allMysteryWordUsers', JSON.stringify(allUsers));

        window.location.href = "index.html";
    }
}


/*----------- Event Listeners ----------*/

const currentPath = window.location.pathname;
loadUserData();

if (currentPath.includes('index.html') || currentPath === '/') {
    if (namesBntElement) namesBntElement.addEventListener('click', catogarySelect)
    if (animalsBntElement) animalsBntElement.addEventListener('click', catogarySelect)
    if (countriesBntElement) countriesBntElement.addEventListener('click', catogarySelect)
    if (newGameBtn) newGameBtn.addEventListener('click', start)
    start();
} else if (currentPath.includes('stats.html')) {

    if (cleanEl) {
        cleanEl.addEventListener('click', () => {
            if (currentMysteryWordUserEmail) {
                const allUsersString = localStorage.getItem('allMysteryWordUsers');
                let allUsers = {};
                if (allUsersString) {
                    allUsers = JSON.parse(allUsersString);
                }
                if (allUsers[currentMysteryWordUserEmail]) {
                    allUsers[currentMysteryWordUserEmail] = {
                        name: user.name,
                        email: user.email,
                        wins: 0,
                        loss: 0,
                        num: 0,
                        pestent: 0
                    };
                    localStorage.setItem('allMysteryWordUsers', JSON.stringify(allUsers));
                    
                    user = allUsers[currentMysteryWordUserEmail];
                }
            } else {
                user = {
                    name: "Guest",
                    email: "guest@example.com",
                    wins: 0,
                    loss: 0,
                    num: 0,
                    pestent: 0
                };
                localStorage.removeItem('allMysteryWordUsers'); 
                localStorage.removeItem('currentMysteryWordUserEmail'); 
            }
            updateStats(); 
            alert(`Stats cleared for ${user.name || "Guest"}.`);
        });
    }
    updateStats();}
else if (currentPath.includes('login.html')) {
    if (addEl) addEl.addEventListener('click', initLoginPage)
}
