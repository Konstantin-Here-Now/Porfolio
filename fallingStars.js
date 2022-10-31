var amountOfStars = screen.width/9;
var amountOfBackStars = screen.width/4;
var starFade = []; //This is the array for the opacity
var counter = [];

function starPlacement() {

var starDatabase = [];
var divNum = [];
var mainContainer = document.getElementById('sky');

var backStars = [];
var backStarDivNum = [];

for (var i = 0; i < amountOfStars; i++) {
       divNum[i] = document.createElement('div');
       divNum[i].className = 'star';
       divNum[i].id = ("star" + i);
       mainContainer.appendChild(divNum[i]);
       starDatabase.push(i + 1);
       starFade.push(undefined);
       counter.push(true);
       document.getElementById("star" + i).style.left = (Math.random()*99) + "%";
       document.getElementById("star" + i).style.top = (Math.random()*98) + "%";

     }

for (var i = 0; i < amountOfBackStars; i++) {
      backStarDivNum[i] = document.createElement('div');
      backStarDivNum[i].style.left = (Math.random()*99) + "%";
      backStarDivNum[i].style.top = (Math.random()*98) + "%";
      backStarDivNum[i].className = 'backStar';
      mainContainer.appendChild(backStarDivNum[i]);
      backStars.push(i + 1);
    }
}


function stars() {

for (var i = 0; i < starFade.length; i++) {

  if (counter[i] === true) {
     if (starFade[i] <= .94 ) {
       starFade[i] = starFade[i] + (Math.floor(Math.random() * 5) / 100);
       document.getElementById("star" + i).style.backgroundColor = "rgba(255, 255, 255, "+ starFade[i] +")";
     }
     else if (starFade[i] === undefined) {
       starFade[i] = (Math.floor(Math.random() * 99) / 100);
     }
     else {
       counter[i] = false;
       starFade[i] = starFade[i] - (Math.floor(Math.random() * 5) / 100);
     }
   }
   else {
     if (starFade[i] >= .05) {
       starFade[i] = starFade[i] - (Math.floor(Math.random() * 5) / 100);
       document.getElementById("star" + i).style.backgroundColor = "rgba(255, 255, 255, "+ starFade[i] +")";
     }
     else {
       starFade[i] = starFade[i] + (Math.floor(Math.random() * 5) / 100);
       counter[i] = true;
       document.getElementById("star" + i).style.left = (Math.random()*99) + "%";
       document.getElementById("star" + i).style.top = (Math.random()*98) + "%";
     }
   }
}
}


var deg =  2;
var blue = 80;
var green = 20;
var backCounter = true;

var reach = 30;
var reachCounter = true;


function background() {

  if (deg === 360) {
    deg = 2;
  }
  else {
    deg = deg + 2;
  }

  if (backCounter === true) {
    if (blue <= 54) {
        blue = blue + 1;
        green = green + 1;
      }
    else {
        backCounter = false;
      }
    }

  else {
    if (blue >= 20) {
        blue = blue - 1;
        green = green - 1;
      }
    else {
        backCounter = true;
      }
  }


  if (reachCounter === true) {
    if (reach <= 70) {
        reach = reach + .1;
      }
    else {
        reachCounter = false;
      }
    }

  else {
    if (reach >= 45) {
        reach = reach - .1;
      }
    else {
        reachCounter = true;
      }
  }

    document.body.style.background = "linear-gradient(" + deg + "deg, rgb(0, "+ green +", " + blue + ") " + reach +"%, rgb(0,0,0))";
}
