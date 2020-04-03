
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

let hrac = new Image();
hrac.src = "../alias/auticko.svg";

let protiHrac = new Image();
protiHrac.src = "../alias/zelene2.svg";

//-------------------------------

// Prístup 2

// Model

var keys = {};

var tick = 0;

var player = {
    x : canvas.width /3,
    y : canvas.height /2,
    width : 80,
    height : 142,
    image : hrac,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
}

var oponent = {
    x : canvas.width /3 + 50,
    y : canvas.height/2,
    dx : 10,
    dy : 10,
    image : protiHrac,
}

function showName () {
    ctx.font = "2.5em Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Micro Machines", canvas.width/2, canvas.height/8);
}

function writeText(text){
    ctx.fillStyle = "black";
    ctx.fillText(text, canvas.width/2, canvas.height/2);
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
    ctx.drawImage(player.image, player.x, player.y);
}

function drawOponent(){
    ctx.drawImage(oponent.image, oponent.x, oponent.y);
    //console.log(oponent.y + " " + oponent.y);
}

function gameOver(){
    writeText("Game Over!");
    //document.getElementById("start").hidden = "false";
    //let text = document.getElementById("text").hidden = "false";
}



  //------------//
 // Controller //
//------------//

//drawAlias();

function mainLoop(){
    clearCanvas();
    drawBg();
    drawAlias();
    drawOponent();
    player.move();
    colision(player);
    oponent.move();
    colision(oponent);
    //showName();   

    requestAnimationFrame(mainLoop);
}

var timer;

function start(){
    if(timer){
       timer = clearInterval(timer);
        startG.textContent = "Start";
    }
    else{
        timer = setInterval(mainLoop, 1000/30);
        startG.textContent = "Stop";
    }
}

window.onload = function(){
    startG = this.document.getElementById("start");
    text = document.getElementById("text");
    canvas = this.document.getElementById("canvas");
    startG.onclick = start;
    
    requestAnimationFrame(this.mainLoop);
}



// Movement and speed
//
function moveY(direction, obj){
    obj.y += direction;
    obj.direction += obj.speed;
    obj.speed++;

    console.log("Speed: " + player.speed);
    console.log("Obj side: " + obj.direction + " obj forw: " + obj.forward);
  
}


function moveS(side, obj){
    obj.x += side;
    obj.rotation = 5;
}

// Collision with canvas borders
//
function colision(obj){
    if(obj.x + obj.width >= canvas.width || obj.x + 5 <= 0){
        //console.log("Object collide to x: "+ obj.x );
        gameOver();
        obj.right = obj.left = obj.forward = obj.backward = 0;

    }
    if(obj.y + obj.height >= canvas.height || obj.y <= 0){
        //console.log("Object collide to y: " + obj.y);
        gameOver();  
        obj.right = obj.left = obj.forward = obj.backward = 0;
              
    }
}



//----------------------------------------------------------------------------------------------


// Obj moving with arrow
//

player.move = function(){
    if(keys[37]){
        moveS(this.left, player) //player.x -= 3;
        colision(player);
    }
    if(keys[39]){
        moveS(this.right, player);//player.x += 3;
        colision(player);
    }
    if(keys[38]){
        moveY(this.forward, player); //player.y -= 4;
        colision(player);
    }
    if(keys[40]){
        moveY(this.backward, player); //player.y += 3;
        colision(player);
    }
}

// oponent moving with WASD
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



