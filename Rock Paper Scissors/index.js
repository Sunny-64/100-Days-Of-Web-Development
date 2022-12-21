var compNum = Math.floor(Math.random() * 3) + 1; 

// which button was clicked by the User. 
for(let i = 0; i<document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var buttonClicked = i + 1; 
        console.log(buttonClicked); 
        winner(buttonClicked , compNum); 
        displayImages(buttonClicked, compNum); 
    });
}

// game logic...
function winner(userChose, compChose){
    if(userChose == compChose){
        showResult(1); 
    }
    else if(userChose == 1 && compChose == 3 || 
            userChose == 2 && compChose == 1 || 
            userChose == 3 && compChose == 2)
    {
        showResult(2); 
    }
    else{
        showResult(3); 
    }
}

// displays the result in the top center.. 
function showResult(whoWon){

    // a centered winner text according to the result. 
    document.querySelector(".you").style.display = "none"; 
    document.querySelector(".comp").style.display = "none"; 
    document.querySelector(".players").style.gridTemplateColumns = "1fr"; 
    document.querySelector(".players").style.justifyItems = "center"; 
    
    // Displays play again button and remove all the other buttons and center the play again button 
    document.querySelector(".rock-div").style.display = "none"; 
    document.querySelector(".paper-div").style.display = "none"; 
    document.querySelector(".scissor-div").style.display = "none"; 
    document.querySelector(".buttons").style.gridTemplateColumns = "1fr"; 
    document.querySelector(".buttons").style.justifyItems = "center"; 

    document.querySelector(".result-div").style.display = "block"; 

    // when play again button is clicked it will reload the page. 
    document.querySelector(".play-again").addEventListener("click", function(){
        location.reload(); 
    }); 

    if(whoWon == 1){
       let winner = document.querySelector(".winner"); 
        winner.style.color = "#FF443A"; 
        winner.innerHTML = "DRAW !!";       
        document.querySelector(".play-again").innerHTML = "PLAY AGAIN";    
    }
    else if(whoWon == 2){
       let winner = document.querySelector(".winner"); 
        winner.style.color = "#FF443A"; 
        winner.innerHTML = "YOU WON !!";         
        document.querySelector(".play-again").innerHTML = "PLAY AGAIN";    
        highlightWinner("comp");
    }
    else if(whoWon == 3){
       let winner = document.querySelector(".winner"); 
        winner.style.color = "#FF443A"; 
        winner.innerHTML = "COMP WON !!";   
        document.querySelector(".play-again").innerHTML = "TRY AGAIN";   
        highlightWinner("user");  
    }
}
// makes the winner stand out more.
function highlightWinner(Loser){
    if(Loser == "user"){
        document.querySelector(".userImg").classList.add("showLoser");
    }
    else{
        document.querySelector(".compImg").classList.add("showLoser");
    }
}

function displayImages(userImgNo, compImgNo){
    // for user images..
    let userImg = "images/";

    if(userImgNo == 1){
        document.querySelector(".userImg").src = userImg + "rock.png"; 
    }
    else if(userImgNo == 2){
        document.querySelector(".userImg").src = userImg + "paper.png"; 
    }
    else if(userImgNo == 3){
        document.querySelector(".userImg").src = userImg + "scissors.png"; 
    }


    // for computer images.. 
    let compImg = "images/flipped images/"; 

    if(compImgNo == 1){
        document.querySelector(".compImg").src = compImg + "rock.png"; 
    }
    if(compImgNo == 2){
        document.querySelector(".compImg").src = compImg + "paper.png"; 
    }
    if(compImgNo == 3){
        document.querySelector(".compImg").src = compImg + "scissors.png"; 
    }
}

