const zinnen = [" has escaped ", " had kidnapped ", " dropped by "]
const nummers = [ 1, 2, 3 ]
//var nummerBox = nummers [Math.floor(Math.random()* nummers.length)]
//var inputBox = document.getElementById("inputBox")
function random() {
    let input = inputBox.value;    
    let number = Math.floor(Math.random()* zinnen.length)
    //console.log(zinnen[nummerBox])
    
let inputSecond = secondinput.value
let nieuweZin = inputSecond+ zinnen[number]+ input

let myDiv = document.createElement("div")
myDiv.innerText = nieuweZin
document.body.appendChild(myDiv)
}

