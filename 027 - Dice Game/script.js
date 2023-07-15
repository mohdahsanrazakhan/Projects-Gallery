// Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice2.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice2.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Roll Dice 
const heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🏆 Player 1 Wins !";
}
else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins ! 🏆";
}
else {
    heading.innerHTML = "Draw !";
}
