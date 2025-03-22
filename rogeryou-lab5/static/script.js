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

// findTheBanana(L1);
// findTheBanana(L2);

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

function addYear() {
  const currentYear = new Date().getFullYear();
  const footerElement = document.getElementById("copyYear");
  if (footerElement) {
    footerElement.innerHTML = `Copyright © rogeru ${currentYear}`;
  }
}

addYear();

// function showList() {
//   const list = document.getElementById("hobbies");
//   const button = document.getElementById("showList");
  
//   list.style.display = "block";
//   button.style.display = "none";
// }

$(document).ready(function() {
  $('.read-more-button').click(function() {
    $('#full-bio').fadeIn();
    $('.read-more-button').hide();
  });
  
  $('.read-less-button').click(function() {
    $('#full-bio').hide();
    $('.read-more-button').show();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (contactForm && formMessage) {
    formMessage.style.display = 'none';
    
    contactForm.setAttribute('novalidate', '');
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const commentInput = document.getElementById('comment');
      
      let isValid = true;
      formMessage.style.display = 'none';
      
      if (!nameInput.checkValidity()) {
        isValid = false;
      }
      
      if (!emailInput.checkValidity()) {
        isValid = false;
      }
      
      if (!commentInput.checkValidity()) {
        isValid = false;
      }
      
      if (!isValid) {
        formMessage.style.display = 'block';
      } else {
        alert('Form submitted successfully!');
        contactForm.reset();
      }
    });
  }
});

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      document.getElementById('adviceText').innerText = data.slip.advice;
    });
}