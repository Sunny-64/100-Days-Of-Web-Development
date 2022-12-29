var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// user clicks...

$(".btn").on("click", function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


// game starting with key press...

var start = false;
var level = 0;
$("#start").on("click", function(e) {
    if (!start) {
        $("#level-title").text("level " + level);
        nextSequence();
        start = true;
    }
});

// checking if the user got the pattern right...

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        var sound = new Audio("sounds/" + "wrong" + ".mp3");
        sound.play();
        $("#level-title").text("Game Over, Press any key to restart");
        startOver();
    }
}

// Start over...

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}

// playing sounds...

function playSound(color) {
    var sound = new Audio("sounds/" + color + ".mp3");
    sound.play();
}

// generating a sequence...

function nextSequence() {

    userClickedPattern = [];
    var randNum = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randNum];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    $("#level-title").text("level " + level);
    level++;
}

// animated buttons...

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}