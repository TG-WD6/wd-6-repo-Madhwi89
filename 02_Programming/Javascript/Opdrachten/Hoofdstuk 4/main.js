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

//for in getallen!!!! 5.2 vraag 3 done
let getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (getallen = 1; getallen < 22; getallen++) {
  if (getallen % 2 === 0) {
    console.log(getallen);  
  }
}


// initialize, condition, increment

// let getallen_1 = 0
// while (getallen_1 < 3) {
// console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"); 
//   getallen_1++;
// }

//opdracht 5.2 nog een keer doen!!
// for (let i=1; i<=15; i++ ){
//   console.log(i);
//   }
  //opdracht 5.2  vraag 4 en 5 nog een keer doen^!!

  //fibonacci
  var a = 0, b = 1;
  console.log(a) 
  console.log(b)
for(var i=0; i<=47;i++){
  var temp = a + b; 
  console.log(temp);
  a = b;
  b = temp;
}


//bubblesort array
function bubbleSort(array) {
  for(let i=0; i<array.length -1; i++){
    for(let j=0; j<array.length -1 -i; j++) {
      if ( array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort([2, 7, 5, 10, 4, 9, 3, 1, 8, 6]))

//Opdracht 5.3
const dutchSports_1 = ["Voetbal;", "Hockey", "Schaatsen"]
console.log(dutchSports_1) 
console.log(dutchSports_1.push("Zeilen", "Zwemmen"))
console.log(dutchSports_1)
console.log(dutchSports_1.unshift ("Volleybal"))
console.log(dutchSports_1)

const ballSports = ["Voetbal", "Volleybal"]
console.log(ballSports)
console.log(dutchSports_1.shift () + " is a ballsport")
console.log(dutchSports_1.splice (0, 1) + " is a ballsport ")
console.log(dutchSports_1)
console.log(dutchSports_1[0], dutchSports_1[1], dutchSports_1[2], dutchSports_1[3])

const dutchSports_1Length = dutchSports_1.length;
console.log(dutchSports_1Length)

const sportsLength = ["Hockey", "Schaatsen", "Zeilen", "Zwemmen"]
console.log(sportsLength[0].length)
console.log(sportsLength[1].length)
console.log(sportsLength[2].length)
console.log(sportsLength[3].length)


//Opdracht 5.4

let arrayLike = document.querySelectorAll('div')
console.log(arrayLike)
const nodArray = Array.from(arrayLike)
console.log(nodArray)

//.filter odd
const filterArray = [2, 8, 15, 19, 35, 48]
function isOdd(x){
  return x%2
}
const filterOutputOdd = filterArray.filter(isOdd)
console.log(filterOutputOdd)

//.filter even
function isEven(x){
  return x%2===0
}
const filterOutputEven = filterArray.filter(isEven)
console.log(filterOutputEven)

//.find
const MyName = ["Madhwi", "Renukadevi", "Balkaran"]
const res = MyName.find(findRenukadevi)
function findRenukadevi(item){
  return item === "Renukadevi";
}
console.log(res)

//.find nummer 2
const persons = [
  { 
    Name: "Madhwi",
    Age: 33
  }, 
  {
    Name: "Vikas",
    Age: 34
  }, 
  {
    Name: "Pietje",
    Age: 5
  }
];

const res_1 = MyName.find(findMadhwi);

function findMadhwi(item){
  return item === "Madhwi";
}
console.log(res_1);


// .some 
const zoekCijfer = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const resultaat = zoekCijfer.some(greaterThanFour)

function greaterThanFour(item){
return item > 4
}

console.log(resultaat)



const adultAge = [
  {
    Naam: "Madhwi",
    Leeftijd: 33
  },
  {
    Naam: "Klaasje",
    Leeftijd: 12
  },
  {
    Naam: "Jantje",
    Leeftijd: 18
  }
]

const meerderjarig = adultAge.some(isAdult)

function isAdult(naam){
  return naam.Leeftijd >=18;
}

console.log(meerderjarig)

//.every
const everyNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


const resultaat_1 = everyNumber.every(isPositive)

function isPositive(item){ 
return item > 9
}
console.log(resultaat_1)

//.every 2
const persons_1 = [
  {
    name: "Madhwi"
  },
  {
    name: "Pietje"
  },
  { surname: "Klaasje"
}
]

const res_2 = persons_1.every(person => person.name != undefined)
console.log(res_2)

//.includes
const fruits = ["Apple", "Banana", "Mango", "Orange"]

const fruits_1 = fruits.includes("Banana")
if(fruits_1) {
  console.log("Yes Banana!!")
} else {
  console.log("No Banana.. ")
}