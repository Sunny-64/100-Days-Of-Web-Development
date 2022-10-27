// player 1

var getRandomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc = "images/dice" + getRandomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImgSrc);

// player 2

var getRandomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "images/dice" + getRandomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImgSrc2);

// result display

if (getRandomNumber1 > getRandomNumber2) {
    document.querySelector(".winner").innerHTML = "🚩 Player 1 wins"
} else if (getRandomNumber1 < getRandomNumber2) {
    document.querySelector(".winner").innerHTML = "Player 2 wins 🚩"
} else {
    document.querySelector(".winner").innerHTML = "🚩 Draw 🚩"
}

// Restart The game
document.querySelector(".restart").addEventListener("click", function(){
    location.reload();  
})










