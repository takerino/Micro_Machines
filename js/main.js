
let canvas = document.getElementById("canvas");
//canvas.height = 570;
canvas.width = 930;

var ctx = canvas.getContext("2d");

// nastavenie pozadia
let bg = canvas.style.background;
canvas.style.background = "url(../plan/Low.svg)";
canvas.style.background = canvas.height;
bg.size = "cover";

// Vypísanie názvu hry
ctx.font = "2.5em Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Micro Machines", canvas.width/2, canvas.height/8);


//vloženie aliasu hráča
//let image = document.createElement('image');

let hrac = new Image;
hrac.src = "../alias/auticko.svg";

let oponentHrac = new Image;
oponentHrac.src = "../alias/zelene2.svg";

//-------------------------------

// Prístup 2

// Model

var keys = {};

var tick = 0;

var alias = {
    x : canvas.width /3,
    y : canvas.height /2,
    dx : 5,
    dy : 7,
    image : hrac,
}

var oponent = {
    x : canvas.width/3 + 100,
    y : canvas.height/2,
    dx : 10,
    dy : 10,
    image : oponentHrac
}

function showName () {
    ctx.font = "2.5em Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Micro Machines", canvas.width/2, canvas.height/8);
}

//----
// View
//----

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBg (){
    bg.src = "url(../map/Low.svg)";
}

function drawAlias(){
    ctx.drawImage(alias.image, alias.x, alias.y);
}

function drawOponent(){
    ctx.drawImage(oponentHrac, oponent.x, oponent.y);
}

function colision(obj){
    if(obj.x >= canvas.width)
        document.getElementById("colision").innerHTML = "Colision on " + obj.x;
}

  //------------//
 // Controller //
//------------//

drawAlias();

function mainLoop(){
    clearCanvas();
    drawBg();
    drawAlias();
    drawOponent();
    alias.move();
    colision(alias);
    oponent.move();
    colision(oponent);
    showName();   

    requestAnimationFrame(mainLoop);
}

var timer;

function start(){
    if(timer){
       timer = clearInterval(timer);
        button.textContent = "Start";
    }
    else{
        timer = setInterval(mainLoop, 1000/30);
        button.textContent = "Stop";
    }
}

window.onload = function(){
    button = this.document.getElementById("button");
    text = document.getElementById("text");
    canvas = this.document.getElementById("canvas");
    button.onclick = start;
    
    requestAnimationFrame(this.mainLoop);
}


//---------------------------------------------------------------------------------------------------------------------------------------------


// Obj moving with arrow
//

alias.move = function(){
    if(keys[37]) alias.dx -= 5;
    if(keys[39]) alias.dx += 5;
    if(keys[38]) alias.dy -= 5;
    if(keys[40]) alias.dy += 5;
}

oponent.move = function(){
    if(keys[65]) alias.dx -= 5;
    if(keys[68]) alias.dx += 5;
    if(keys[87]) alias.dy -= 5;
    if(keys[83]) alias.dy += 5;
}



// Keyboard handler

window.onkeydown = function(){
    keys[event.keyCode] = true;
    console.log(keys);
}
window.onkeyup = function(){
    keys[event.keyCode] = false;
}



