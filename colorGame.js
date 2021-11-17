var numSquares = 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(numSquares);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");




easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    //stop it from clicking again
    easyBtn.disabled = true;
    hardBtn.disabled = false;
    //generate 3 new colors
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor(numSquares);
    //change MessageDisplay to the new color
    colorDisplay.textContent = pickedColor;
    //remove backgroundColor from header
    h1.style.backgroundColor = "steelblue";
    //give the new squares backgrounds
    for (var i = 0; i < squares.length; i++) {
        //do these things if the from the 3 because we generate 3
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }



    hardBtn.addEventListener("click", function () {
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        //stop it from clicking again
        easyBtn.disabled = false;
        hardBtn.disabled = true;
        //generate new colors
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        //pick a new random color from array
        pickedColor = pickColor(numSquares);
        //change MessageDisplay to the new color
        colorDisplay.textContent = pickedColor;
        //remove backgroundColor from header
        h1.style.backgroundColor = "steelblue";
        //give the new squares backgrounds
        for (var i = 0; i < squares.length; i++) {
            //do these things if the from the 3 because we generate 3
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    });

});



resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor(numSquares);
    //change MessageDisplay to the new color
    colorDisplay.textContent = pickedColor;
    //remove "correct/try again"
    messageDisplay.textContent = "";
    //after win the button text goes to "play again" and doesn't return back
    resetButton.textContent = "New Colors";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        //add new colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    //remove backgroundColor from header
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grap color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";

        } else {
            this.style.backgroundColor = "#232323";
            this.style.cursor = "default";
            messageDisplay.textContent = "Try Again";
        }
    });
}



function changeColor(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(numSquares) {
    var random = Math.floor(Math.random() * numSquares);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr[i] = randomColor();
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}