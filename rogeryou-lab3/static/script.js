
let x = 5;
let y = 7;

let z = x+y;

console.log(z);

let A = "Hello ";
let B = "world!";

let C = A + B;

console.log(C);

function SumNPrint(x1, x2) {
  x3 = x1 + x2;
  console.log(x3);
}

SumNPrint(x,y);
SumNPrint(A,B);

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "Banana") {
      alert("Found Banana in at index " + i);
    }
  }
}

function findTheBanana(array) {
  array.forEach(element => {
    if (element == "Banana") {
      alert("found banana!");
    }
  });
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc() {
  let d = new Date();

  let h = d.getHours();
  let E = document.getElementById("dynamicHeader");

  if (5 < h && h < 12) {
    E.innerHTML="Good morning! I'm Roger";
  } else if (12 < h && h < 18) {
    E.innerHTML ="Good afternoon! I'm Roger";
  } else if (18 < h && h < 20) {
    E.innerHTML ="Good evening! I'm Roger";
  } else if (20 < h && h < 24 && 0 < h && h < 5) {
    E.innerHTML ="Good night! I'm Roger";
  }
  
}

if (window.location.href.includes("index.html")) {
  greetingFunc();
}
