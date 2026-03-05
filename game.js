let capital = 1000000
let risk = 0

let game = document.getElementById("game")
let chain = []

function updateCapital(){
document.getElementById("capital").innerText =
"$" + capital.toLocaleString()
}

function grow(){

let seg = document.createElement("div")
seg.className="segment"

seg.style.left = (chain.length*20 + 120) + "px"
seg.style.top = "120px"

game.appendChild(seg)
chain.push(seg)

}

function chip(){

let c = document.createElement("div")
c.className="chip"
c.innerText="🪙"

c.style.left = (Math.random()*300 + 80) + "px"
c.style.top="40px"

game.appendChild(c)

}

function clarify(){

capital += 150000
grow()
chip()

document.getElementById("message").innerText =
"Clarity compounds steady returns."

updateCapital()

}

function equivocate(){

capital += 350000
risk += .18
grow()
chip()

if(Math.random() < risk){

capital = Math.floor(capital * .4)

document.getElementById("message").innerText =
"Ambiguity triggered volatility."

}else{

document.getElementById("message").innerText =
"Risk paid off."

}

updateCapital()

}

for(let i=0;i<5;i++){
grow()
}
