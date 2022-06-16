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

var z = "Result"
function getNumber(number) {
    
}

//vraag 4

// 4.2 Vraag 1 classname:
let numb = document.getElementsByClassName("voorbeeld").length;
document.getElementById("vraag").innerHTML = numb;

// tagname
const collection = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = collection.length;

//queryselector

document.querySelector("h3, h4").style.backgroundColor = "red";