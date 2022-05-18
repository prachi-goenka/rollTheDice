var player1 = Math.floor(Math.random()*6)+1;
var diceImage = "dice"+player1+".png";
var imgSrc = "images/"+diceImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgSrc);
var player2 = Math.floor(Math.random()*6)+1;
var imgSrc2 = "images/dice"+player2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imgSrc2);

if(player1>player2){
  document.querySelector("h2").innerHTML="Player 1 wins";
}
else if(player2>player1)
{
  document.querySelector("h2").innerHTML="Player 2 wins";
}
else {
  document.querySelector("h2").innerHTML="It's a Draw! Roll again.";
}
