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










// noob approach

/*function randomNum() {
    var x = Math.random() * 6;
    x = Math.floor(x) + 1;
    return x;
}

var rand = randomNum();
var rand2 = randomNum();

// player 1 

if (rand == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");

} else if (rand == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");

} else if (rand == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");

} else if (rand == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");

} else if (rand == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");

} else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");

}
// player 2 

if (rand2 == 1) {

    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (rand2 == 2) {

    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (rand2 == 3) {

    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (rand2 == 4) {

    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (rand2 == 5) {

    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {

    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


// display result

if (rand > rand2) {
    document.querySelector(".winner").innerHTML = "🚩 Player 1 wins.";
} else if (rand < rand2) {
    document.querySelector(".winner").innerHTML = "Player 2 wins. 🚩";

} else {
    document.querySelector(".winner").innerHTML = "Draw";

}

*/
