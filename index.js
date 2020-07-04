//random nos. from 1-6
var randomNumber1 = Math.ceil(Math.random() * 6);   

var randomNumber2 = Math.ceil(Math.random() * 6);   

var imageSource1 = "images/dice" + randomNumber1 + ".png";

var imageSource2 = "images/dice" + randomNumber2 + ".png";


// setting for random dice images
document.querySelector(".img1").setAttribute("src", imageSource1);

document.querySelector(".img2").setAttribute("src", imageSource2);


//conditions for winning
if(randomNumber1 > randomNumber2){
    //Player 1 wins!
    document.querySelector(".container h1").innerHTML = "⛳Player 1 wins!";
}

else if(randomNumber1 < randomNumber2){
    //Player 2 wins!
    document.querySelector(".container h1").innerHTML = "Player 2 wins!⛳";
}

else{
    //draw!
    document.querySelector(".container h1").innerHTML = "Draw!";
}

