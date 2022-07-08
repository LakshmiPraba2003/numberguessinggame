var y=Math.floor(Math.random()*100)+1;
var guess;
var attemptCount=document.getElementById("attemptCount");
var live=10;
var text;
const message=document.getElementById("message");
function check(){
    guess=(document.getElementById("textbox").value);
    live--;
if(guess==y){
    alert("WELL DONE! YOU ARE AMAZING! YOU GUESSED IT RIGHT");
    location.href="./win.html";
}
else if(guess>y){
    alert("TRY A SMALLER NUMBER");
}
else{
    alert("TRY A GREATER NUMBER");
}
if(live==0){
    alert("GAME OVER! TRY AGAIN");
    location.href="./lose.html";
}
console.log(guess);
attemptCount.innerHTML=live;
}