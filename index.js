//Creating random number from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Using the random number to pick out a random dice image
let randomDiceImage = "dice" + randomNumber1 + ".png";
//Usind randomDiceImage to change source
let randomImageSource = "images/" + randomDiceImage;
//Changing src attribute based on a random number we get
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// let image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Winner is the first player 🎉";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a draw!";
} else {
  document.querySelector("h1").innerHTML = "Winner is the second player 🎉";
}
