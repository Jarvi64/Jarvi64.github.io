const buttons = document.querySelectorAll("button");
const rows = document.querySelectorAll(".row");
let roww = 1;
let charr = 1;
let gameEnded = false;
const wordList = ["APPLE", "TABLE", "WATER", "LEMON", "GRAPE",
"TRUCK", "PLANT", "CHAIR", "CLOUD", "MUSIC",
"OCEAN", "BEACH", "FLAME", "EARTH", "DAISY",
"PAINT", "SHIRT", "ZEBRA", "HONEY", "CHESS",
"JELLY", "BADGE", "FLASK", "GRAIN", "HAPPY",
"JUICE", "KNIFE", "LASER", "MOUSE", "NOVEL",
"PIZZA", "QUEEN", "RADIO", "SHEEP", "TIGER",
"URBAN", "VIRUS", "WRIST", "XENON", "YACHT",
"ZEBRA", "ALBUM", "BLITZ", "CLIFF", "DODGE",
"EAGLE", "FABLE", "GRAIN", "HORSE", "IVORY",
"JUICE", "KNOCK", "LEMON", "MANGO", "NOBLE",
"OCEAN", "PIANO", "QUILT", "RIBBO", "SUNNY",
"TIGER", "UNITY", "VOICE", "WHALE", "XEROX",
"YOUTH", "ZEBRA"];
const wordtoday = wordList[Math.floor(Math.random() * wordList.length)];

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    keypress(button.innerText);
  });
});
function makeword(key) {
  if (charr < 6) {
    rows[roww - 1].querySelectorAll(".char")[charr - 1].innerText = key;
    charr += 1;
  }
}
function colorRow(answer, guess) {
  const colors = Array(guess.length).fill("GRAY");
  
  for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
          colors[i] = "GREEN";
          answer = answer.replace(guess[i], " ");
      }
  }
  
  for (let i = 0; i < guess.length; i++) {
      if (colors[i] !== "GREEN" && answer.includes(guess[i])) {
          colors[i] = "YELLOW";
          answer = answer.replace(guess[i], " ");
      }
  }
  
  return colors;
}
function checkword() {
  
  const charElements = rows[roww - 1].querySelectorAll(".char");
  const charValuesArray = Array.from(charElements).map(charElement => charElement.innerHTML);
  const charValuesString = charValuesArray.join("");
  const colors = colorRow(wordtoday, charValuesString);
  
  
  
    for (let i = 0; i < charValuesString.length; i++) {
        if (colors[i] === "GREEN") {
          charElements[i].style.backgroundColor = "#538d4e";
          
          document.getElementById(`${charValuesString[i]}`).style.backgroundColor = "#538d4e";
          document.getElementById(`${charValuesString[i]}`).classList.add('used');
          charElements[i].classList.add('flip-animation'); 
          
          
        }else if (colors[i] === "YELLOW") {
          charElements[i].style.backgroundColor = "#b59f3b";
          if(!document.getElementById(`${charValuesString[i]}`).classList.contains('used')){
            document.getElementById(`${charValuesString[i]}`).style.backgroundColor = "#b59f3b";
            document.getElementById(`${charValuesString[i]}`).classList.add('used');
            charElements[i].classList.add('flip-animation'); 
            
          }
        }
        else{
          charElements[i].style.backgroundColor = "#3a3a3c";
          if(!document.getElementById(`${charValuesString[i]}`).classList.contains('used')){
            document.getElementById(`${charValuesString[i]}`).style.backgroundColor = "#3a3a3c";
          }}
      }
      if(charValuesString==wordtoday){
        exitgame(true);
      }
}
  

  



function Enter() {

  if (charr < 6) {
    const message = document.querySelector(".message");
    message.textContent = "Not enough letters!!";
    message.style.color = "white";
    setTimeout(() => {
      message.textContent = "hello"; // Clear the message
      message.style.color = "black";
    }, 1000); // Clear after 2 seconds
  } 
  else {
    checkword();
    roww += 1;
    charr = 1;
    if (roww > 6) {
      exitgame(false); // Indicate loss
    }
  }
  
  
}

function Delete() {
  const letelement = rows[roww - 1].querySelectorAll(".char");
  for (let index = letelement.length - 1; index >= 0; index--) {
    const element = letelement[index];
    if (element.innerText !== "") {
      element.innerText = "";
      charr -= 1;
      break;
    }
  }
}
function keypress(key) {
  if (gameEnded) return;
  if (key === "Enter") {
    Enter();
  } else if (key===".") {
    Delete();
  } else {
    makeword(key);
  }
}

document.addEventListener("keydown", function (event) {
    const key = event.key.toUpperCase();
    if (gameEnded) return;
    if (key === "ENTER") {
      Enter();
    } else if (key === "BACKSPACE") {
      Delete();
    } else if (key.match(/^[A-Z]$/)) {
      makeword(key);
    }
  });
  function exitgame(isWin){

    const message = document.querySelector(".message");
    if(isWin){
    message.textContent = "You Won!! " + "The Word was " + wordtoday;
    message.style.color = "white";
    }
    else{
      message.textContent = "You Lost! The Word was " + wordtoday;
      message.style.color = "white";
    }
    gameEnded=true;
  }