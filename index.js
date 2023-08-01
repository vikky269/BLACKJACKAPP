
let Cards = []
let sum = 0 
let hasblackjack = false
let isAlive = false
let Message = ""
let MessageEl = document.getElementById("message-el")
let SumEl = document.getElementById("sum-el")
let CardsEl = document.getElementById("cards-el")

//console.log(Cards)
let player = {
    Name: "Amune",
    Chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name +": " + "$" + player.Chips
function getRandomcard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 10
    }else{
        return randomNumber
    }
}

function startgame(){
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
    Cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    isAlive = true
    rendergame()
}
function rendergame(){
    CardsEl.textContent = " Cards: " 
    for(let i = 0; i < Cards.length; i++){
        CardsEl.textContent += Cards[i] + " " 
    }
    SumEl.textContent = "Sum: " + sum

if (sum <= 20){
    Message = "Do you want to draw a new card"
}else if(sum === 21){
    Message =  "you have got Blackjack"
    hasblackjack = true
}else {
    Message = "You are out of the game"
    isAlive = false 
}
MessageEl.textContent = Message
}

function newcard(){
    if(isAlive === true && hasblackjack === false){
    let newCard = getRandomcard()
    sum += newCard
    Cards.push(newCard)
    rendergame()
   }
}

