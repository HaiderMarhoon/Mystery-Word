
/*-------------- Constants -------------*/
const categories = {
    "name": [
        "Ali", "Jony", "Sara", "Salman", "James", "Robby", "Emily", "David", "Sophia", "Michael", "Olivia", "William",
        "Ava", "Noah", "Isabella", "Liam", "Mia", "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", "Harper", "Mason",
        "Evelyn", "Logan", "Abigail", "Alexander", "Ella", "Daniel", "Scarlett", "Jackson", "Grace", "Sebastian", "Chloe",
        "Jack", "Victoria", "Aiden", "Riley", "Owen", "Aria", "Samuel", "Lily", "Matthew", "Zoe", "Joseph", "Nora",
        "Levi", "Hannah", "Gabriel", "Layla", "Henry", "Brooklyn", "Anthony", "Aurora", "Julian", "Lucy", "Wyatt", "Penelope",
        "Christopher", "Madison", "Andrew", "Ellie", "Joshua", "Stella", "Dylan", "Natalie", "Isaac", "Maya", "Nathan", "Paisley",
        "Ryan", "Violet", "Caleb", "Skylar", "Leo", "Audrey", "Jonathan", "Bella", "Adrian", "Willow", "Hunter", "Samantha",
        "Thomas", "Anna", "Charles", "Elizabeth", "Christian", "Savannah", "Ezra", "Claire", "Aaron", "Kinsley", "Connor", "Eva",
        "Landon", "Kennedy", "Isaiah", "Genesis", "Cameron", "Aaliyah", "Asher", "Sarah", "Nicholas", "Piper", "Gavin", "Ruby",
        "Eli", "Nova", "Jordan", "Autumn", "Dominic", "Nevaeh", "Adam", "Alice", "Austin", "Serenity", "Jaxson", "Cora",
        "Dean", "Eleanor", "Carson", "Hadley", "Ian", "Naomi", "Axel", "Madelyn", "Cooper", "Elena", "Miles", "Delilah",
        "Jason", "Maria", "Lincoln", "Willow", "Chase", "Melanie", "Cole", "Rose", "Tyler", "Sophie", "Xavier", "Ivy"
    ],
    "animal": [
        "cat", "lion", "Eel", "Zebra", "Mouse", "Oilfish", "Raccoon", "Elephant", "Giraffe", "Penguin", "Kangaroo", "Dolphin",
        "Cheetah", "Panda", "Tiger", "Wolf", "Bear", "Fox", "Deer", "Rabbit", "Squirrel", "Hedgehog", "Badger", "Otter",
        "Beaver", "Coyote", "Hyena", "Gorilla", "Chimpanzee", "Orangutan", "Baboon", "Lemur", "Sloth", "Koala", "Platypus",
        "Echidna", "Wombat", "Tasmanian Devil", "Kookaburra", "Toucan", "Parrot", "Eagle", "Owl", "Hawk", "Falcon", "Vulture",
        "Flamingo", "Swan", "Duck", "Goose", "Chicken", "Turkey", "Peacock", "Pigeon", "Crow", "Magpie", "Sparrow", "Robin",
        "Blue Jay", "Woodpecker", "Hummingbird", "Ostrich", "Emu", "Kiwi", "Reptile", "Snake", "Lizard", "Crocodile", "Alligator",
        "Turtle", "Tortoise", "Frog", "Toad", "Salamander", "Newt", "Fish", "Shark", "Whale", "Octopus", "Squid", "Jellyfish",
        "Starfish", "Seahorse", "Crab", "Lobster", "Shrimp", "Clam", "Oyster", "Snail", "Slug", "Worm", "Spider", "Scorpion",
        "Ant", "Bee", "Wasp", "Butterfly", "Moth", "Dragonfly", "Ladybug", "Grasshopper", "Cricket", "Beetle", "Fly", "Mosquito",
        "Flea", "Tick", "Snailfish", "Blobfish", "Axolotl", "Pangolin", "Okapi", "Narwhal", "Fossa", "Quokka", "Aye-Aye", "Manatee",
        "Dugong", "Walrus", "Seal", "Sea Lion", "Dolphin", "Porpoise", "Orca", "Beluga", "Narwhal", "Humpback Whale", "Blue Whale"
    ],
    "country": [
        "Angola", "Bahrain", "Burundi", "Comoros", "Finland", "Haiti", "India", "Japan", "Kenya", "Mexico", "Norway", "Peru",
        "Qatar", "Rwanda", "Afghanistan", "Albania", "Algeria", "Andorra", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
        "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
        "Central African Republic", "Chad", "Chile", "China", "Colombia", "Congo, Dem. Rep.", "Congo, Rep.", "Costa Rica",
        "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
        "Guyana", "Honduras", "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
        "Jordan", "Kazakhstan", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
        "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
        "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Micronesia", "Moldova", "Monaco", "Mongolia",
        "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
        "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Oman", "Pakistan", "Palau", "Palestine",
        "Panama", "Papua New Guinea", "Paraguay", "Philippines", "Poland", "Portugal", "Romania", "Russia", "Saint Kitts and Nevis"
    ]
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
const inputuserEl = document.querySelector("#inputUser")
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
    const display = ComputerChoice.split("").map(latter => {
        return guessedLetters.includes(latter) ? latter : "_"
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

function guessLatter(latter) {
    if (guessedLetters.includes(latter) || wrongGuesses >= maxGuesses || !ComputerChoice) {
        return
    }

    guessedLetters.push(latter);

    if (!ComputerChoice.includes(latter)) {
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
    initLoginPage();
}
