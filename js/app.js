/*-------------- Constants -------------*/
const categories = {
    name: ["Ali", "Jony", "Sara", "Salman", "James", "Robby"],
    animal: ["cat", "lion", "Eel", "Zebra", "Mouse", "Oilfish", "Raccoon"],
    country: ["Angola", "Bahrain", "Burundi", "Comoros", "Finland", "Haiti"]
}; 

const select= ["name","animal","conuntry"]
/*---------- Variables (state) ---------*/
let ComputerChoice
let catogary
let playerChoice
let ComputerSelect

/*----- Cached Element References  -----*/
const namesBntElement = document.querySelector("#name")
const animalsBntElement = document.querySelector("#animal")
const countriesBntElement = document.querySelector("#country")
const messageEl = document.querySelector("#message");

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




function init(){

}


/*----------- Event Listeners ----------*/
namesBntElement.addEventListener('click',catogarySelect )
animalsBntElement.addEventListener('click',catogarySelect )
countriesBntElement.addEventListener('click',catogarySelect )