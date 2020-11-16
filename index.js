// for the first one

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDice="dice"+randomNumber1+".png";

var randomImgSource="images/"+randomDice;

var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImgSource);

// for the second one

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice2="dice"+randomNumber2+".png";

var randomImgSource2="images/"+randomDice2;

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 wins!";
} else{
  document.querySelector("h1").textContent="It's a tie!";
}
