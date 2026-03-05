let capital = 1000000
let risk = 0
let game = document.getElementById("gameArea")
let chain = []
let x = 50
let y = 150

const capitalDiv = document.getElementById("capital")
const messageDiv = document.getElementById("message")
const intro = document.getElementById("intro")
const gameContainer = document.getElementById("gameContainer")

document.getElementById("startBtn").onclick = () => {
  intro.style.display = "none"
  gameContainer.style.display = "block"
  init()
}

function updateCapital(){
  capitalDiv.innerText = "$" + capital.toLocaleString()
}

function addSegment(){
  let seg = document.createElement("div")
  seg.className="segment"
  x += 25
  seg.style.left = x + "px"
  seg.style.top = y + "px"
  game.appendChild(seg)
  chain.push(seg)
}

function addChip(){
  let chip = document.createElement("div")
  chip.className="chip"
  chip.innerText="🪙"
  chip.style.left = (Math.random()*300 + 50) + "px"
  chip.style.top="50px"
  game.appendChild(chip)
}

function clarify(){
  capital += 150000
  addSegment()
  addChip()
  messageDiv.innerText="Clarity compounds steady returns."
  updateCapital()
}

function equivocate(){
  capital += 400000
  risk += 0.18
  addSegment()
  addChip()
  if(Math.random() < risk){
    capital = Math.floor(capital * 0.35)
    messageDiv.innerText="Ambiguity triggered volatility."
  } else {
    messageDiv.innerText="Risk paid off."
  }
  updateCapital()
}

function init(){
  for(let i=0;i<5;i++) addSegment()
  updateCapital()
}
