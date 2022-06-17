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
  return (x *2);
      
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

const container = document.querySelector("#container")
changeColor(container)
function changeColor(element) {
    element.style.backgroundColor = "aquamarine"
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


// function randomNumber() {
//     let x = 1;
// console.log(Math.round(0 >= x < 1))
// }

// function randomNumber() {
//     let x = 15;
// console.log(Math.floor(Math.random() * x))
// }

// Vraag 4.4



