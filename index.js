
var lives = 3;
var score = 0;
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var optionsContainer = document.getElementById("options-container");

init();
document.getElementById("displayCounter").innerHTML = score;
function init() {
  displayOptions();
  setColorDisplay();
}

function displayOptions() {
  for (var i = 0; i < colors.length; i++) {
    var colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = colors[i];
    colorBox.addEventListener("click", function () {
      checkAnswer(this);
    });
    optionsContainer.appendChild(colorBox);
  }
}

function setColorDisplay() {
  colorDisplay.style.backgroundColor = pickedColor;
}

function checkAnswer(clickedColorBox) {
  if (clickedColorBox.style.backgroundColor === pickedColor) {
    messageDisplay.textContent = "Correct!";
    score++
    resetGame();
  } else {
    lives--;
    if (lives === 0) {
      messageDisplay.textContent = "Game Over! The correct color was " + pickedColor;
      messageDisplay.style.color = "red";
      resetGame();
    } else {
      messageDisplay.textContent = "Try Again. Lives left: " + lives;
      messageDisplay.style.color = "darkred";
    }
  }
}

function resetGame() {
  lives = 3;
  document.getElementById("displayCounter").innerHTML = score;
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  optionsContainer.innerHTML = "";
  displayOptions();
  setColorDisplay();
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}