//Vraag 1
function pressButton() {
  console.log("Hello World");
}

//vraag 2
// let Input1 = document.getElementById("firstInputElement");
// function input() {
//     var x = document.getElementsById ("firstInputElement");
//     console.log(x)
// }

// vraag 2 + 3
var y = document.getElementById("firstInputElement");
function getText(test) {
  var x = console.log(test);
  return x * 2;
}

// var z = "Result"
// function getNumber(number) {

// }

//vraag 4

// 4.2 Vraag 1 classname:
let numb = document.getElementsByClassName("voorbeeld").length;
document.getElementById("vraag").innerHTML = numb;

// tagname
const collection = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = collection.length;

//queryselector

document.querySelector("h3, h4").style.backgroundColor = "red";

//queryselectorAll
// function myfunction() {
// let container = document.querySelector("#container");
// let matches = document.querySelectorAll("div.div1 > p");
// let change;
// for ()
// }

// const container = document.getElementById("container")
// container.style.backgroundColor = "red"

const container = document.querySelector("#container");
changeColor(container);
function changeColor(element) {
  element.style.backgroundColor = "aquamarine";
}

// const div1 = document.querySelectorAll("#container.div1 > p")
// kleurP.forEach(kleurP)
// function kleurP(test) {
//     test.style.backgroundColor = "red"
// }

function myFunction() {
  document.getElementById("oefening1").innerHTML = "";
}

// var y = document.getElementById("firstInputElement");
// function getText(test) {
//   var x = console.log(test.value);
//  return (x *2);

// }

function randomNumber() {
    let x = 1;
console.log(Math.round(0 >= x < 1))
}

// function randomNumber() {
//     let x = 15;
// console.log(Math.floor(Math.random() * x))
// }

// Vraag 4.4

// var names = document.getElementById("groep");
// function namenGroep(namen) {
//   var x = console.log(namen);
//   return x * 2;
// }

// var names = document.getElementById("#namenGroep");
// const namen = [" Madhwi ", " Esther ", " Luisa ", " Nathan "]
// const nummers = [ 1, 2, 3, 4 ]
// function Madhwi() {
//   let x = namenGroep.value;
//   let nummers = (Math.round()* namen.length)
//   // console.log(Math.round()* namen.length)
// }

// const groep = document.getElementById("groep")

// groep.addEventListener("change", (Madhwi) => {
// console.log("Madhwi")
// })

//4.4 oefenen
// document.getElementById("myButton").onclick = function() {

//  var name = document.getElementById("groep").value
//  console.log("Hello", name)
// }

// var namenGroep = [ Madhwi, Esther, Luisa, Nathan]




//loops

let array = [ "Blink", 182]
for (const index in array)
console.log(index)

let array_2 = [ "Blink", 182]
for (const item of array_2) {
  console.log(item)
}


// // let bugsInCode = 1;
// // while (bugsInCode > 0) {
// //   console.log(bugsInCode)
// //   bugsInCode += 2
// //   if(bugsInCode == 3) continue;
// //   bugsInCode -= 1
// //   if(needSleep) break;
// // }

// let pets = [ "Bird", "Dog", "Cat"]
// console.log(pets.shift() + " escaped!")
// console.log(pets.pop() + " escaped!")
// console.log(pets)
// console.log(pets.unshift("Bird"))
// console.log(pets.push("Cat"))
// console.log(pets)

const pets = [ "Bird", "Dog", "Cat"]
const outdoorPets = pets.slice(1)
pets.splice(1, 2, "cat", "Dog")
outdoorPets.sort()
pets.forEach(pet => console.log(`My very own ${pet}`))
const favoritePets = pets.map(pet => `My favorite ${pet}`)


//Opdracht 5.1 start
const numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numberArray)

const fruitArray = [ "Appel", "Aardbei", "Mango", "Banaan", "Kiwi"]
console.log(fruitArray)
console.log(fruitArray.splice(0, 2, ))

const randomNumber_1 = numberArray[Math.floor(Math.random()* numberArray.length)]
console.log(randomNumber_1)

const numberAndFruit = [numberArray, fruitArray, Math.floor(Math.random()* numberArray.length)]
console.log(numberAndFruit)
//opdracht 5.1 finish


//  let colors = [ "Red", "Blue", "Green", "Pink", "Yellow"] 
//  let randColors = colors[Math.floor(Math.random()* colors.length)]
//  console.log(randColors)

//opdracht 5.2
const dutchsports = ["Voetbal", "Hockey", "Schaatsen"];
console.log(dutchsports[0], dutchsports[1], dutchsports[2])

const nlSport = ["Voetbal", "Hockey", "Schaatsen"];
// for of loop!!!
for (sport of nlSport) {
  console.log(sport)
}

//for in loop!!!
const nlsport_2 = ["Voetbal", "Hockey", "Schaatsen"];
for(const i in nlsport_2){
  console.log(nlsport_2[i])
}

//for in getallen!!!!
let getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (getallen = 1; getallen < 22; getallen++) {
  if (getallen % 2 === 0) {
    console.log(getallen);  
  }
}


