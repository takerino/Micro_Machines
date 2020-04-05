
let canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

// Vypísanie názvu hry
ctx.font = "3em Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
//ctx.fillText("Micro Machines", canvas.width/2, canvas.height/4);


//vloženie aliasu hráča

let hrac = new Image();
hrac.src = "../alias/auticko.svg";

let protiHrac = new Image();
protiHrac.src = "../alias/zelene2.svg";

//-------------------------------

// Model

var keys = {};

var tick = 0;
var btn;

var alias = {
    x : canvas.width /3,
    y : canvas.height /2,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
    maxSpeed : 5,
}

var player = {
    x : canvas.width /3,
    y : canvas.height /2,
    width : 80,
    height : 145,
    image : hrac,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
    maxSpeed : 5,
}

var oponent = {
    x : canvas.width /2 + 50,
    y : canvas.height/2,
    width : 80,
    height : 145,
    image : hrac,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
    maxSpeed : 5,
}

function showName () {
    ctx.font = "2.5em Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Micro Machines", canvas.width/2, canvas.height/8);
}

function writeText(text){
    clearCanvas();
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
    bg = "url(../plan/Low.svg)";
}

function drawAlias(){
    ctx.drawImage(player.image, player.x, player.y);
}

function drawOponent(){
    //ctx.drawImage(oponent.image, oponent.x, oponent.y);
    //console.log(oponent.y + " " + oponent.y);
    ctx.fillRect(oponent.x, oponent.y, oponent.width, oponent.height);
}

function gameOver(){
    clearCanvas();
    writeText("Game Over!");
    var bg = canvas.style.background;
    canvas.style.background = "url(../img/Background.jpg)"
    canvas.style.background.size = "80% cover";
    menu.style.display = "block";
    gName.style.display = "block";
    btn = 1;
}

function setBg(){
    canvas.style.background = "../img/bg.jpg";
}

function help(){
    clearCanvas();
    menu.style.display = "none";
    gName.style.display = "none";
    document.getElementById("helper").style.display = "block";
}

function back(){
    clearCanvas();
   
    document.getElementById("helper").style.display = "none";
    menu.style.display = "block";
    gName.style.display = "block";
}



  //------------//
 // Controller //
//------------//

function mainLoop(){
    clearCanvas();
    drawBg();
    drawOponent();
    drawAlias();
    player.move();
    colision(player);
    oponent.move();
    colision(oponent);
    //showName();   

    requestAnimationFrame(mainLoop);
}

var timer;

function start(){
    clearCanvas();   
    //canvas.style.background = "../map/Low.svg";
    document.getElementById("canvas").style.background = "url(../plan/Low.svg)";

    if(btn == 1){
        console.log("Po Game over");
    }

    menu.style.display = "none";
    gName.style.display = "none";
    requestAnimationFrame(mainLoop);
    //writeText("Play!")
}  

window.onload = function(){
    setBg();
    startG = this.document.getElementById("start");
    //canvas = this.document.getElementById("canvas");
    menu = document.getElementById("menu");
    gName = document.getElementById("name");
    inst = document.getElementById("help");
    iback = document.getElementById("iback");
    isound = document.getElementById("isound");
    
    startG.onclick = start;
    inst.onclick = help;
    iback.onclick = back;
    isound.onclick = sound;
    //requestAnimationFrame(this.mainLoop);
}



// Movement and speed
// Direction => forward/backward, obj => object to modify direction
function moveY(direction, obj){
    let pom = 0.2;
    obj.y += direction;
    //console.log("obj y: " +obj.y + " dir: " + direction);
    
    obj.y += obj.speed;
    
    if(Math.abs(obj.speed) < obj.maxSpeed && direction < 0)
        obj.speed--;
        // if(pom > 1)
        //     obj.speed--;
        // else
        //     pom *= 20;
    if(obj.speed < obj.maxSpeed - 3 && direction > 0)
        obj.speed++;
   
    console.log("dir: " + direction + " speed: " + obj.speed);
  
}


function moveS(side, obj){
    obj.x += side;
    obj.rotation = 5;
}

// Collision with canvas borders
//
function colision(obj){
    if(!btn){
        if(obj.x + obj.width >= canvas.width || obj.x + 5 <= 0){
            //console.log("Object collide to x: "+ obj.x );
            gameOver();
            obj.right = obj.left = obj.forward = obj.backward = obj.speed = 0;

            }
        if(obj.y + obj.height >= canvas.height || obj.y <= 0){
            //console.log("Object collide to y: " + obj.y);
            gameOver();  
            obj.right = obj.left = obj.forward = obj.backward = obj.speed = 0;              
        }
    }
    else{
        clearCanvas();
        btn = 1;
        setStart();
        //start();
        //console.log("Po...");
        
    }
   
}

function setStart(){
    player.forward = alias.forward;
    player.backward = alias.backward;
    player.left = alias.left;
    player.right = alias.right;
    player.speed = alias.speed;
    player.x = alias.x;
    player.y = alias.y;
}

function objCol(){

}

// Sound components
//

let check = 1;

function sound(){
    if(check){
        ctx.beginPath();
        ctx.moveTo(30,35);
        ctx.lineTo(80, 85);
        ctx.lineWidth = 6;
        ctx.strokeStyle = "red";
        ctx.stroke();
        check = 0;
    }
    else if(check == 0){
        clearCanvas();
        check = 1;
        console.log("Check: " + check);
    }
    console.log("Click: " + check);
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
    if(keys[65]){
        moveS(this.left, oponent);
        colision(oponent);
    }
    if(keys[68]){
        moveS(this.right, oponent);
        colision(oponent);
    }
    if(keys[87]){
        moveY(this.forward, oponent);
        colision(oponent);
    }
    if(keys[83]){
        moveY(this.backward, oponent); 
        colision(oponent);
    }
}

// Keyboard handler

window.onkeydown = function(){
    keys[event.keyCode] = true;
    console.log(keys);
}
window.onkeyup = function(){
    keys[event.keyCode] = false;
}

